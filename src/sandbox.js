@Component({
  template: `
  <div>
    <h2>Counter</h2>
    <button (click)="increment()">increment</button>
    <span>{{ counter }}</span>
    <ul>
        <li *for="let item in items"></li>
    </ul>
  </div>`
})
class Counter {
  constructor() {
    this.counter = 0;
    this.items = [1,2,3]
  }

  increment() {
    console.log(this.counter++);
  }
}