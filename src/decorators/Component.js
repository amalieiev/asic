import { $components } from '../services/components'

export function Component({template}) {
    return function (target) {
        $components[target.name] = {target, template}
    }
}