import { Component } from '../src/index'

@Component({
    template: `
<div>
    <p>{{ text }}</p>
    <SimpleText></SimpleText>
</div>`
})
export class ComplexComponent {
    text = 'Parent component';
}