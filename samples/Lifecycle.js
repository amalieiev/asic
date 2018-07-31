@Component({
    template: `<p>Value: {{ count }}</p>`
})
class Lifecycle {
    initialize() {
        this.count = 0;
        setInterval(() => {
            this.increment();
        }, 1000);
    }
    increment() {
        this.count++;
    }
}

export { Lifecycle }