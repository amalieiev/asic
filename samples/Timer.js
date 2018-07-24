@Component({
    template: `
<div>
    <h2>Timer</h2>
    <p>Value: {{ count }}</p>
</div>`
})
class Timer {
    constructor() {
        this.count = 0;
        setInterval(() => {
            this.increment();
        }, 1000)
    }
    increment() {
        this.count++;
    }
}