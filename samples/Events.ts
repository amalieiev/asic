import { Component, Ref } from '../src/index'

@Component({
    template: `
<div>
    <p>Clicks counter: {{ count }}</p>
    <p>{{ login.value }}</p>
    <input type="text" #ref="login" (input)="increment()">
    <button (click)="increment()">click</button>
</div>`
})
export class Events {
    @Ref login;
    count = 0;

    increment() {
        this.count++;
        console.log(this.login.value);
    }
}