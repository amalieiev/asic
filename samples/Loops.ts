import { Component } from '../src/index'

@Component({
    element: 'Loops',
    template: `
<ul>
    <li *for="item in items">
        {{ item }}
    </li>
</ul>`
})
export class Loops {
    items = ['javascript', 'python', 'ruby'];
}