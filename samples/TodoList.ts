import { Component, Input } from '../src/index'

@Component({
    template: `
<div>
    <p>{{ title }}</p>
    <input type="text" (input)="onChange()" #ref="input">
    <button (click)="addItem()">Add</button>
    <ul>
        <li *for="item in items">
            <button (click)="removeItem(item)">remove</button>{{ item.name }}
        </li>
    </ul>
</div>`
})
export class TodoList {
    @Input title;
    input;

    items = [
        {name: 'Improve Asic', done: false}
    ];

    addItem() {
        this.items.push({name: 'New Item', done: false});
    }

    removeItem(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    onChange() {
        console.log(this.input.value);
    }
}