import { Component } from '../src/index'

@Component({
    element: 'ComplexComponent',
    template: `
<div>
    <p>Container</p>
    <SimpleText></SimpleText>
</div>`
})
export class ComplexComponent {
}