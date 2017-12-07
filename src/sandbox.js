@Component({
    template: `
  <div>
    <h2>Counter</h2>
    <span>{{ counter }}</span>
    <User></User>
    <ul>
        <li *for="let item in items">
            <button (click)="increment(item.value)">{{ item.text }}</button>
        </li>
    </ul>
  </div>`
})
class Counter {
    constructor() {
        this.counter = 0;
        this.items = [
            {text: 'add 5', value: 5},
            {text: 'add 10', value: 10}
        ];
    }

    increment(value) {
        console.log(this.counter += value);
    }
}