import { $components } from './services';
import { $events } from './services';

export function $replaceEvents(template) {
    const eventRe = /\(.+?\)=".*?"/g;

    return template.replace(eventRe, function (match) {
        const eventName = $getOutputName(match);
        console.log(match);
        console.log($getOutputName(match));
        console.log($getOutputExpression(match));

        $events[eventName] = true;

        return '';
    })
}

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

export function $getOutputExpression(expression) {
    const expressionRe = /".+?"/;

    return expression.match(expressionRe)[0].replace(/^"/, '').replace(/"$/, '');
}

export function $replace(template, data) {
    const re = /\{\{.*?\}\}/g;

    return template.replace(re, function (match) {
        let expression = $getExpressionFromMatch(match);

        return $exec(expression, data);
    })
}

export function $render(element, component) {
    if (element.innerHTML) {

    } else {
        const template = $components[component].template;
        const Component = $components[component].target;
        const cmp = new Component();
        const html = $replace(template, cmp);

        element.innerHTML = $markEvents(html);
        element.querySelectorAll('[asic-event]').forEach(el => {
            console.log(el);
            const eventName = el.getAttribute('asic-event');
            const eventExpression = el.getAttribute('asic-event-expression');

            el.$asic = {
                events: {
                    [eventName]: eventExpression
                },
                context: cmp
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
    const propertyRe = /\b[a-zA-Z_]+\b/g;
    const maybeProps = expression.match(propertyRe);

    maybeProps.forEach(key => {
        if (context[key] !== undefined) {
            expression = expression.replace(RegExp('\\b' + key + '\\b'), 'this.' + key)
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

                if (target.$asic && target.$asic.events[eventName]) {
                    $exec(target.$asic.events[eventName], target.$asic.context);
                }
            });
        }
    })
}
