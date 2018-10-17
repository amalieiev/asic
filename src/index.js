import {
    Component,
    Attr,
    Ref
} from './decorators'

import { $bootstrap } from './functions'

if (window) {
    window.Component = Component;
    window.Attr = Attr;
    window.Ref = Ref;
}

$bootstrap();

export {
    Component,
    Attr,
    Ref
}