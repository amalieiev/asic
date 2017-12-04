@Component({
    template: `
  <div>
    <h2>Counter</h2>
    <button (click)="increment()">increment</button>
    <span>{{ counter }}</span>
    <User></User>
    <ul>
        <li *for="let item in items"><a href="#" *for="test in items">link</a></li>
    </ul>
    <a href="#" *for="test in items">link</a>
  </div>`
})
class Counter {
    constructor() {
        this.counter = 0;
        this.items = [1, 2, 3]
    }

    increment() {
        console.log(this.counter++);
    }
}

@Component({
    template: `
    <h2>User info:</h2>
    <p>age </p>{{ age }}<button (click)="addYear()">add year</button>
    `
})
class User {
    constructor() {
        this.age = 10;
    }

    addYear() {
        this.age++;
    }
}