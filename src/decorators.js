import { $components } from './services'

export function Component({template}) {
    return function (target) {
        $components[target.name] = {target, template}
    }
}