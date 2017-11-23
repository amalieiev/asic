@Component({
  template: `
  <h2>Counter</h2>
  <button>increment</button>
  <span>{{ counter }}</span>
  `
})
class Counter {
  constructor() {
    this.counter = 0
  }

  increment() {
    this.counter++
  }
}