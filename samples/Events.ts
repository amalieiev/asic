import { Component, Ref } from '../src/index'

@Component({
    element: 'Events',
    template: `
<div>
    <p>Clicks counter: {{ count }}</p>
    <p>{{ login.value }}</p>
    <input type="text" #login (input)="increment()">
    <button (click)="increment()">click</button>
</div>`
})
export class Events {
    @Ref login;
    count = 0;

    increment() {
        this.count++;
    }
}