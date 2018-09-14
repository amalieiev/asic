import { Component } from '../src/index'

@Component({
    element: 'BasicUsage',
    template: `
<div>
    <p>My Component</p>
    <p>{{ text }}</p>
</div>`
})
export class BasicUsage {
    text = 'Some Text';
}