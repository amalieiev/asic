import { $components } from './services';

export function Component({ template, element }) {
    return function (target) {
        if ($components[element]) {
            $components[element] = { ...$components[element], target, template};
        } else {
            $components[element] = {target, template};
        }
    }
}

export function Input(target, property) {
    if (!target.constructor.props) {
        target.constructor.props = [];
    }

    target.constructor.props.push(property);
}

export function Ref(target, property) {

}