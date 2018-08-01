import { Component, Input } from '../src/index'

@Component({
    template: `
<div>
    <p>{{ title }}</p>
    <ul>
        <li *for="item in items">{{ item }}</li>
    </ul>
</div>`
})
export class Props {
    @Input items;
    @Input title;
}