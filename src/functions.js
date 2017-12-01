import { $components } from './services';
import { $events } from './services';

/**
 * Replaces '(click)="foo()"' with 'asic-event="click" asic-event-expression="foo()"'
 * And puts event name to $events variable
 * @param {string} template
 */
export function $replaceEvents(template) {
    const eventRe = /\(.+?\)=/g;

    return template.replace(eventRe, function (match) {
        const eventName = $getEventName(match);

        $events[eventName] = true;

        return `asic-event=${eventName} asic-event-expression=`;
    });
}

export function $getEventName(expression) {
    const outputRe = /\(.+?\)/;
    const parenthesesRe = /[(,)]/g;

    return expression.match(outputRe)[0].replace(parenthesesRe, '');
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

    template = template.replace(forRe, 'asic-for');

    return template;
}

export function $transform(template) {
    template = $replaceInterpolations(template);
    template = $replaceFor(template);
    template = $replaceEvents(template);

    return template;
}

export function $render(element, component) {
    if (element.innerHTML) {

    } else {
        const template = $components[component].template;
        const Component = $components[component].target;
        const instance = new Component();

        element.innerHTML = $transform(template);

        const proxy = new Proxy(instance, {
            set(target, property, value) {
                target[property] = value;

                element.querySelectorAll('[asic-bind-expression]').forEach(el => {
                    const expression = el.getAttribute('asic-bind-expression');

                    el.innerHTML = $exec(expression, proxy);
                });

                return true;
            }
        });

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

export function $bootstrap() {
    window.addEventListener('load', () => {
        for (let key in $components) {
            let component = $components[key];
            document.querySelectorAll(component.target.name).forEach(element => {
                $render(element, component.target.name);
            })
        }

        for (let eventName in $events) {
            document.addEventListener(eventName, function() {
                const target = arguments[0].target;

                if (target.$asic) {
                  $exec(target.$asic.events[eventName], target.$asic.context);
                }
            });
        }
    })
}
