import {
    Component,
    Input,
    Output,
    Ref
} from './decorators'

import { $bootstrap } from './functions'

if (window) {
    window.Component = Component;
    window.Input = Input;
    window.Output = Output;
    window.Ref = Ref;
}

$bootstrap();

export {
    Component,
    Input,
    Output,
    Ref
}