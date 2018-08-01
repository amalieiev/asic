import { $components } from './services';

export function Component({template}) {
    return function (target) {
        if ($components[target.name]) {
            $components[target.name] = { ...$components[target.name], target, template};
        } else {
            $components[target.name] = {target, template};
        }
    }
}
export function Input(target, property) {
    const component = target.constructor.name;

    if ($components[component]) {
        $components[component] = {
            ...$components[component],
            props: $components[component].props
                ? [...$components[component].props, property]
                : [property]
        };
    } else {
        $components[component] = {
            props: [property]
        };
    }
}