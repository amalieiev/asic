import {
    Component,
    Input
} from './decorators'

import { $bootstrap } from './functions'

if (window) {
    window.Component = Component;
    window.Input = Input;
}

$bootstrap()

export {
    Component,
    Input
}