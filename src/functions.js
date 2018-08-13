import { $components } from './services';
import { $events } from './services';

/**
 * Replaces '(click)="foo()"' with 'asic-event="click" asic-event-expression="foo()"'
 * And puts event name to $events variable
 * @param {string} template
 */
export function $replaceEvents(template) {
    const eventRe = /(?:\()(.+?)(?:\)=)/g;

    return template.replace(eventRe, function (match, eventName) {

        $events[eventName] = true;

        return `asic-event="${eventName}" asic-event-expression=`;
    });
}

export function $replaceRefs(template) {
    return template.replace(/#ref/g, function (match, refName) {

        return `asic-ref`;
    });
}

/**
 * Replaces '{{ paramName }}' with '<span asic-bind-expression="paramName"></span>'
 * @param {string} template
 */
export function $replaceInterpolations(template) {
    const re = /(?:\{\{)(.*?)(?:\}\})/g;
    template = template.replace(re, function (fullMatch, match) {
        return `<span asic-bind-expression="${match}"></span>`;
    });

    const div = document.createElement('div');

    div.innerHTML = template;

    return div.innerHTML;
}

/**
 * Replaces '*for=item in items' with 'asic-for=item' 'asic-for-in=items'
 * @param {string} template
 */
export function $replaceFor(template) {
    const forRe = /\*for=".*?"/g;

    template = template.replace(forRe, match => {
        const name = match.match(/(?:\*for=")(.*)(?: in)/)[1];
        const data = match.match(/(?: in )(.*)(?:")/)[1];

        return `asic-for="${name}" asic-for-data="${data}" asic-for-todo="true" data-asic-index`;
    });

    let el = document.createElement('div');
    el.innerHTML = template;

    let forEl = el.querySelector('[asic-for]');

    if (forEl) {
        let commentEl = document.createComment(forEl.outerHTML);

        forEl.replaceWith(commentEl);

        return el.innerHTML;
    } else {
        return template;
    }
}

function getComments(el) {
    var arr = [];
    for(var i = 0; i < el.childNodes.length; i++) {
        var node = el.childNodes[i];
        if(node.nodeType === Node.COMMENT_NODE) {
            arr.push(node);
        } else {
            arr.push.apply(arr, getComments(node));
        }
    }
    return arr;
}

/**
 * Replicates iterateble parts.
 * @param template
 */
export function $replicateFor(template, context) {
    const div = document.createElement('div');

    div.innerHTML = template;

    const element = div.querySelector('[asic-for][asic-for-todo]');

    if (!element) {
        return template;
    }

    const name = element.getAttribute('asic-for');
    const data = element.getAttribute('asic-for-data');

    const outerHTML = element.outerHTML;

    element.removeAttribute('asic-for-todo');

    let resultHTML = '';

    for (let index = 0; index < $exec('return ' + data, context).length; index++) {
        const partHTML = element.outerHTML.replace(RegExp(`\\b${name}\\b`, 'g'), match => {
            return `${data}[${index}]`;
        });

        resultHTML += partHTML;
    }

    template = template.replace(outerHTML, resultHTML);

    return $replicateFor(template, context);
}

/**
 * Makes template transformations.
 * @param template
 */
export function $transform(template, context, element) {
    template = $normalize(template);
    template = $replaceEvents(template);
    template = $replaceRefs(template);
    template = $replaceFor(template);
    // template = $replicateFor(template, context);
    template = $replaceInterpolations(template);

    if (element) {
        element.innerHTML = template;
    }

    return template;
}

/**
 * Replaces '<SomeComponent></SomeComponent>' with '<somecomponent></somecomponent>'
 * @param template
 */
function $normalize(template) {
    for (let componentName in $components) {
        template = template.replace(RegExp(`<${componentName}`, 'g'), `<${componentName.toLowerCase()}`);
        template = template.replace(RegExp(`</${componentName}`, 'g'), `</${componentName.toLowerCase()}`);
    }

    return template;
}

export function $render(element, component, parentProxy) {
    if (element.innerHTML) {

    } else {
        const template = $components[component].template;
        const Component = $components[component].target;
        const props = $components[component].props || [];
        const cmp = new Component();

        const proxy = new Proxy(cmp, {
            set(target, property, value) {
                target[property] = value;

                $interpolateExpressions(element, proxy);

                return true;
            }
        });

        Object.getOwnPropertyNames(proxy).forEach(property => {
            // is Array
            if (proxy[property].splice) {
                ['pop', 'push', 'reverse', 'shift', 'unshift', 'sort', 'splice'].forEach(methodName => {
                    proxy[property][methodName] = new Proxy(proxy[property][methodName], {
                        apply(target, thisArg, argumentsList) {
                            const result =  target.apply(thisArg, argumentsList);

                            $interpolateExpressions(element, proxy);

                            return result;
                        }
                    });
                });
            }
        });

        $applyProps(element, props, cmp, parentProxy);
        $transform(template, cmp, element);
        $bindRefs(element, cmp);

        $initialize(proxy);

        $interpolateExpressions(element, proxy);
    }
}

export function $bindRefs(element, context) {
    element.querySelectorAll('[asic-ref]').forEach(el => {
        const refName = el.getAttribute('asic-ref');

        context[refName] = el;
    });
}

export function $renderInnerComponents(element) {
    for (let componentName in $components) {
        element.querySelectorAll(componentName).forEach(el => {
            $render(el, componentName);
        })
    }
}

export function $bindEvents(element, context) {
    element.querySelectorAll('[asic-event]').forEach(el => {
        const eventName = el.getAttribute('asic-event');
        const expression = el.getAttribute('asic-event-expression');

        el.$asic = {
            events: {
                [eventName]: expression
            },
            context
        };
    });
}

export function $interpolateExpressions(element, proxy) {
    $interpolateForExpressions(element, proxy);

    try {
        element.querySelectorAll('[asic-bind-expression]').forEach(el => {
            const expression = el.getAttribute('asic-bind-expression');

            el.innerHTML = $exec('return ' + expression, proxy);
        });
    } catch (err) {
        console.log(err);
    }

    $bindEvents(element, proxy);
    $renderInnerComponents(element);
    $cleanUp();
}

function $interpolateForExpressions(element, proxy) {
    element.querySelectorAll('[data-asic-index]').forEach(el => {
        el.remove();
    });

    let commentEl = getComments(element).find(commentNode => commentNode.textContent.match('asic-for'));

    if (commentEl) {
        let template = $replicateFor(commentEl.textContent, proxy);
        let div = document.createElement('div');

        div.innerHTML = template;

        commentEl.replaceWith(commentEl, ...div.childNodes);
    }
}

export function $applyProps(element, props, context, parentContext) {
    props.map(param => {
        const value = element.getAttribute(param);
        const expression = element.getAttribute(`[${param}]`);

        if (value !== null) {
            context[param] = value;
        } else if (expression !== null) {
            context[param] = $exec('return ' + expression, parentContext);
        }
    });
}

export function $initialize(proxy) {
    if (proxy.initialize) {
        proxy.initialize();
    }
}

/**
 * Evaluates an expression in provided context.
 * @param { string } expression
 * @param { Object } context
 */
export function $exec(expression, context, args) {
    if (!context) context = window;

    const parts = expression.match(/[a-zA-Z0-9_]+/g);

    parts.forEach(name => {
        if (name in context) {
            expression = expression.replace(RegExp(`\\b${name}\\b`), match => {
                return 'this.' + match;
            });
        }
    });

    return Function(expression).apply(context, args);
}

/**
 * Cleans asic related things form markup
 */
function $cleanUp () {
    [
        'asic-event',
        'asic-ref',
        'asic-event-expression',
        // 'asic-bind-expression',
        'asic-for',
        'asic-for-data',
    ].forEach(value => {
        document.querySelectorAll(`[${value}]`).forEach(element => {
            element.removeAttribute(value);
        });
    });
}

/**
 * Bootstraps an application.
 */
export function $bootstrap() {
    window.addEventListener('load', () => {
        $renderInnerComponents(document);

        for (let eventName in $events) {
            document.addEventListener(eventName, function (event) {
                const target = arguments[0].target;

                if (target.$asic && target.$asic.events[eventName]) {
                    $exec(target.$asic.events[eventName], target.$asic.context);
                } else if (target.hasAttribute('asic-bind-expression') && target.parentElement.$asic && target.parentElement.$asic.events[eventName]) {
                    $exec(target.parentElement.$asic.events[eventName], target.parentElement.$asic.context);
                }
            });
        }
    });
}
