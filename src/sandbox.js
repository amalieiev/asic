@Component({
    template: `
  <div>
    <h2>Counter</h2>
    <button (click)="increment()">increment</button>
    <span>{{ counter }}</span>
    <User></User>
    <ul>
        <li *for="let item in items">data</li>
    </ul>
  </div>`
})
class Counter {
    constructor() {
        this.counter = 0;
        this.items = [1, 2, 3];
    }

    increment() {
        console.log(this.counter++);
    }
}