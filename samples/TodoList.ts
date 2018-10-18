import { Component, Attr, Ref } from '../src/index'

@Component({
    element: 'TodoList',
    template: `
<div>
    <p>{{ title }}</p>
    <input type="text" #input>
    <button (click)="addItem()">Add</button>
    <ul>
        <li *for="item in items">
            <button (click)="removeItem(item)">remove</button>{{ item.name }}
        </li>
    </ul>
    <SimpleText></SimpleText>
</div>`
})
export class TodoList {
    @Attr title;
    @Ref input;

    items = [
        {name: 'Improve Asic', done: false}
    ];

    addItem() {
        this.items.push({name: this.input.value, done: false});
    }

    removeItem(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}