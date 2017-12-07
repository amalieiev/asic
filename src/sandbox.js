@Component({
    template: `
  <div>
    <h2>Counter</h2>
    <ul>
        <li *for="let item in items">
            <button (click)="increment(item.value)">{{ item.text }} current value: {{ counter }}</button>
            <span *for="let d in item.data">ddd</span>
        </li>
    </ul>
    <Test></Test>
    <button (click)="reset()">reset</button>
  </div>`
})
class Counter {
    constructor() {
        this.counter = 0;
        this.items = [
            {text: 'add 5', value: 5, data: [1,2,3]},
            {text: 'add 10', value: 10, data: [4,5,6]}
        ];
    }

    increment(value) {
        this.counter += value;
    }

    reset() {
        this.counter = 0;
    }
}

@Component({
    template: `
        <div>
                <p>Test Component</p>
                {{ text }}
        </div>
    `
})
class Test {
    constructor() {
        this.text = 'test text';
    }
}