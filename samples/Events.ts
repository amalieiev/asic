import { Component } from '../src/index'

@Component({
    template: `
<div>
    <p>Clicks counter: {{ count }}</p>
    <button (click)="increment()">click</button>
</div>`
})
export class Events {
    count = 0;

    increment() {
        this.count++;
    }
}