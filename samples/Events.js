@Component({
    template: `
<div>
    <p>Clicks counter: {{ count }}</p>
    <button (click)="increment()">click</button>
</div>`
})
class Events {
    constructor() {
        this.count = 0;
    }
    increment() {
        this.count++;
    }
}