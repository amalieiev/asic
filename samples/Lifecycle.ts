import { Component } from '../src/index'

@Component({
    element: 'Lifecycle',
    template: `<p>Value: {{ count }}</p>`
})
export class Lifecycle {
    count = 0;
    initialize() {
        setInterval(() => {
            this.increment();
        }, 1000);
    }
    increment() {
        this.count++;
    }
}