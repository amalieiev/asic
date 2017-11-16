import { $components } from '../services/components'
import { $render } from './render'

export function $bootstrap() {
    window.addEventListener('load', () => {
        for (let key in $components) {
            let component = $components[key]
            document.querySelectorAll(component.target.name).forEach(element => {
                $render(element, component.target.name)
            })
        }
    })
}
