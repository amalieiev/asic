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
        this.items = ['javascript', 'python', 'ruby'];
    }
}

export { Loops }