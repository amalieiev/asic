import {
    Component
} from './decorators'

import { $bootstrap } from './functions'

if (window) {
    window.Component = Component
}

$bootstrap()

export {
    Component
}