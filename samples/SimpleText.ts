import { Component } from '../src/index'

@Component({
    element: 'SimpleText',
    template: `
<div>
    <p>Inner component</p>
    <p>{{ text }}</p>
</div>`
})
export class SimpleText {
    text = 'Simple Text';
}