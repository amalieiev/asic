import { $components } from '../services/components'
import { $replace } from './replace'

export function $render(element, component) {
    if (element.innerHTML) {

    } else {
        const template = $components[component].template
        const Component = $components[component].target

        element.innerHTML = $replace(template, new Component())

        for (let key in $components) {
            element.querySelectorAll(key).forEach(el => {
                $render(el, key)
            })
        }
    }
}
