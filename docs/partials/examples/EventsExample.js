import { Component } from 'asic';

@Component({
  template: `
  <div>
    <p>clicks counter: {{ value }}</p>
    <button (click)="increment()">click</button>
  </div>`
})
class EventsExample {
  constructor () {
    this.value = 0
  }
  increment () {
    this.value++
  }
}
