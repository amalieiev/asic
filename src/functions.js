import { $components } from './services';
import { $events } from './services';

export function $markEvents(template) {
    const eventRe = /\(.+?\)=/g;

    return template.replace(eventRe, function (match) {
        const eventName = $getOutputName(match);

        $events[eventName] = true;

        return `asic-event=${eventName} asic-event-expression=`;
    })
}

export function $getOutputName(expression) {
    const outputRe = /\(.+?\)/;
    const parenthesesRe = /[(,)]/g;

    return expression.match(outputRe)[0].replace(parenthesesRe, '');
}

export function $replace(template) {
    const re = /\{\{.*?\}\}/g;

    return template.replace(re, function (match) {
        let expression = $getExpressionFromMatch(match);

        return `<span asic-bind-expression="${expression}"></span>`;
    })
}

export function $render(element, component) {
    if (element.innerHTML) {

    } else {
        const template = $components[component].template;
        const Component = $components[component].target;
        const instance = new Component();
        const html = $replace(template);
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


        element.innerHTML = $markEvents(html);

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

export function $getExpressionFromMatch(match) {
    const startRe = /\{\{/;
    const endRe = /\}\}/;

    return match
        .replace(startRe, '')
        .replace(endRe, '')
        .trim();
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
