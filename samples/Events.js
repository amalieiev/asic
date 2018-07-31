@Component({
    template: `
<div>
    <p>Clicks counter: {{ count }}</p>
    <button (click)="increment()">click</button>
</div>`
})
class Events {
    initialize() {
        this.count = 0;
    }
    increment() {
        this.count++;
    }
}

export { Events }