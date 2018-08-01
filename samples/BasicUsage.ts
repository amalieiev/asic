import { Component } from '../src/index'

@Component({
    template: `
<div>
    <p>My Component</p>
    <p>{{ text }}</p>
</div>`
})
export class BasicUsage {
    text = 'Some Text';
}