@Component({
  template: `
  <div>
    <h2>Counter</h2>
    <button (click)="increment()">increment</button>
    <span>{{ counter }}</span>
  </div>`
})
class Counter {
  constructor() {
    this.counter = 10;
  }

  increment() {
    console.log(this.counter++);
  }
}