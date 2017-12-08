import { $components } from './services';
import { $events } from './services';
import { $forTemplates } from './services';

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

    div.querySelectorAll('[asic-bind-expression]').forEach(element => {
        if (element.parentElement.getAttribute('asic-event')) {
            element.setAttribute('asic-event', element.parentElement.getAttribute('asic-event'));
            element.setAttribute('asic-event-expression', element.parentElement.getAttribute('asic-event-expression'));
        }
    });

    return div.innerHTML;
}

/**
 * Replaces '*for=item in items' with 'asic-for=item' 'asic-for-in=items'
 * @param {string} template
 */
export function $replaceFor(template) {
    const forRe = /\*for=".*?"/g;

    return template.replace(forRe, match => {
        const name = match.match(/(?:let )(.*)(?: in)/)[1];
        const data = match.match(/(?: in )(.*)(?:")/)[1];

        return `asic-for="${name}" asic-for-data="${data}" asic-for-todo="true"`;
    });
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

    element.removeAttribute('asic-for-todo');

    let resultHTML = '';

    for (let index = 0; index < $exec('return ' + data, context).length; index++) {
        const partHTML = element.outerHTML.replace(RegExp(`\\b${name}\\b`, 'g'), match => {
            return `${data}[${index}]`;
        });

        resultHTML += partHTML;
    }

    element.setAttribute('asic-for-todo', 'true');

    template = template.replace(element.outerHTML, resultHTML);

    return $replicateFor(template, context);
}

/**
 * Makes template transformations.
 * @param template
 */
export function $transform(template, context) {
    template = $replaceEvents(template);
    template = $replaceFor(template);
    template = $replicateFor(template, context);
    template = $replaceInterpolations(template);

    return template;
}

export function $render(element, component) {
    if (element.innerHTML) {

    } else {
        const template = $components[component].template;
        const Component = $components[component].target;
        const instance = new Component();
        const proxy = new Proxy(instance, {
            set(target, property, value) {
                target[property] = value;

                element.querySelectorAll('[asic-bind-expression]').forEach(el => {
                    const expression = el.getAttribute('asic-bind-expression');

                    //TODO: find correct solution
                    try {
                        el.innerHTML = $exec('return ' + expression, proxy);
                    } catch (err) {
                    }
                });

                return true;
            }
        });

        element.innerHTML = $transform(template, proxy);

        element.querySelectorAll('[asic-bind-expression]').forEach(el => {
            const expression = el.getAttribute('asic-bind-expression');

            el.innerHTML = $exec('return ' + expression, proxy);
        });

        element.querySelectorAll('[asic-event]').forEach(el => {
            const eventName = el.getAttribute('asic-event');
            const expression = el.getAttribute('asic-event-expression');

            el.$asic = {
                events: {
                    [eventName]: expression
                },
                context: proxy
            };
        });

        for (let key in $components) {
            element.querySelectorAll(key).forEach(el => {
                $render(el, key);
            })
        }
    }
}

/**
 * Evaluates an expression in provided context.
 * @param { string } expression
 * @param { Object } context
 */
export function $exec(expression, context, args) {
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
        for (let key in $components) {
            let component = $components[key];
            document.querySelectorAll(component.target.name).forEach(element => {
                $render(element, component.target.name);
            })
        }

        for (let eventName in $events) {
            document.addEventListener(eventName, function (event) {
                const target = arguments[0].target;

                if (target.$asic) {
                    $exec(target.$asic.events[eventName], target.$asic.context);
                }
            });
        }

        $cleanUp();
    });
}
