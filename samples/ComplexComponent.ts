import { Component } from '../src/index'

@Component({
    element: 'ComplexComponent',
    template: `
<div>
    <p>{{ text }}</p>
    <SimpleText></SimpleText>
</div>`
})
export class ComplexComponent {
    text = 'Parent component';
}