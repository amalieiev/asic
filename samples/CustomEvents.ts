import { Component, Ref, Output } from '../src/index'

@Component({
    element: 'CustomEvents',
    template: `
<div>
    <p>{{ title }}</p>
    <MyComponent (data)="onData($event)"></MyComponent>
</div>`
})
export class CustomEvents {
    title = 'Custom Events ';

    onData(data) {
        this.title += data;
    }
}


@Component({
    element: 'MyComponent',
    template: `
<div>
    <p>My Component</p>
    <button (click)="onClick()">Fire Event</button>
</div>`
})
export class MyComponent {
    @Output data;

    onClick() {
        this.data('hello world!');
    }
}