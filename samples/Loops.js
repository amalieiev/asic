@Component({
    template: `
<ul>
    <li *for="item in items">
        {{ item }}
    </li>
</ul>`
})
class Loops {
    constructor() {
        this.items = ['javascript', 'java', 'python', 'ruby', 'html'];
    }
}