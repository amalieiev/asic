@Component({
    template: `<p>Value: {{ count }}</p>`
})
class Lifecycle {
    constructor() {
        this.count = 0;
    }
    initialize() {
        setInterval(() => {
            this.increment();
        }, 1000);
    }
    increment() {
        this.count++;
    }
}