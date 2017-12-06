@Component({
    template: `
  <div>
    <h2>Counter</h2>
    <span>{{ counter }}</span>
    <User></User>
    <ul>
        <li *for="let item in items">
            <button (click)="increment()">{{ item }}</button>
        </li>
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