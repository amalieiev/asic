@Component({
    template: `<p>Value: {{ count }}</p>`
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