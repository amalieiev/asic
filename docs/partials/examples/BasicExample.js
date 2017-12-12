import { Component } from 'asic';

@Component({
  template: `
  <p>Some text: {{ text }}</p>
  `
})
class BasicExample {
  constructor () {
    this.text = 'Hello Asic!'
  }
}
