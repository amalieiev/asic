@Component({
    template: `
<div>
    <h2>Interpolation</h2>
    <p>Text: {{ text }}</p>
    <SimpleText></SimpleText>
</div>`
})
class Interpolations {
    constructor() {
        this.text = 'Hello Asic'
    }
}

@Component({
    template: `
<div>
    <p>{{ text }}</p>
</div>`
})
class SimpleText {
    constructor() {
        this.text = 'Simple text'
    }
}

@Component({
    template: `
<div>
    <h2>Events</h2>
    <p>Clicks counter: {{ count }}</p>
    <button (click)="increment()">click</button>
</div>`
})
class Events {
    constructor() {
        this.count = 0;
    }
    increment() {
        this.count++;
    }
}

@Component({
    template: `
<div>
    <h2>Loops</h2>
    <ul>
        <li *for="item in items">
            <span>{{ item.name }} skills: <strong *for="skill in item.skills">{{ skill }} </strong></span>
        </li>
    </ul>
</div>`
})
class Loops {
    constructor() {
        this.items = [
            {name: 'John', skills: ['javascript', 'java']},
            {name: 'Adam', skills: ['python', 'ruby', 'html']}
        ];
    }
}
