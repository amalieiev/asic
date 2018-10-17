import { Component, Attr } from '../src/index'

@Component({
    element: 'Props',
    template: `
<div>
    <p>{{ title }}</p>
    <ul>
        <li *for="item in items">{{ item }}</li>
    </ul>
</div>`
})
export class Props {
    @Attr items;
    @Attr title;
}