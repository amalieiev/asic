import { $components } from './services';
import { $events } from './services';

/**
 * Replaces '(click)="foo()"' with 'asic-event="click" asic-event-expression="foo()"'
 * And puts event name to $events variable
 * @param {string} template
 */
export function $replaceEvents(template) {
    const eventRe = /\(.+?\)/g;
    const parenthesesRe = /[(,)]/g;

    return template.replace(eventRe, function (match) {
        const eventName = match.replace(parenthesesRe, '');

        $events[eventName] = true;

        return `asic-event=${eventName} asic-event-expression`;
    });
}

/**
 * Replaces '{{ paramName }}' with '<span asic-bind-expression="paramName"></span>'
 * @param {string} template
 */
export function $replaceInterpolations(template) {
    const re = /\{\{.*?\}\}/g;

    return template.replace(re, function (match) {
        let expression = match.replace(/\{\{/, '')
            .replace(/\}\}/, '')
            .trim();

        return `<span asic-bind-expression="${expression}"></span>`;
    });
}

/**
 * Replaces '*for' with 'asic-for'
 * @param {string} template
 */
export function $replaceFor(template) {
    const forRe = /\*for/g;

    return template.replace(forRe, 'asic-for');
}

/**
 * Replicates iterateble parts.
 * @param template
 */
export function $replicateFor(template, data) {
    return template;
}

/**
 * Makes template transformations.
 * @param template
 */
export function $transform(template, data) {
    template = $replaceInterpolations(template);
    template = $replaceFor(template);
    template = $replicateFor(template, data);
    template = $replaceEvents(template);

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
                        el.innerHTML = $exec(expression, proxy);
                    } catch (err){}
                });

                return true;
            }
        });

        element.innerHTML = $transform(template, proxy);

        element.querySelectorAll('[asic-bind-expression]').forEach(el => {
            const expression = el.getAttribute('asic-bind-expression');

            el.innerHTML = $exec(expression, proxy);
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
export function $exec(expression, context) {
    const parts = expression.match(/[a-zA-Z0-9_]+/g);

    parts.forEach(name => {
        if (name in context) {
            expression = expression.replace(RegExp(`\\b${name}\\b`), match => {
                return 'this.' + match;
            });
        }
    });

    return Function('return ' + expression).call(context);
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
            document.addEventListener(eventName, function () {
                const target = arguments[0].target;

                if (target.$asic) {
                    $exec(target.$asic.events[eventName], target.$asic.context);
                }
            });
        }
    })
}