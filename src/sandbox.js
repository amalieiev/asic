@Component({
    template: `
  <div>
    <h2>Counter</h2>
    <span>{{ counter }}</span>
    <User></User>
    <ul>
        <li *for="let item in items">
            <button (click)="onClick(item)">{{ item.text }}</button>
        </li>
    </ul>
  </div>`
})
class Counter {
    constructor() {
        this.counter = 0;
        this.items = [
            {text: 'increment'},
            {text: 'decrement'}
        ];
    }

    onClick(item) {
        console.log(item, this.counter++);
    }
}