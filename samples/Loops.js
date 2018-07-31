@Component({
    template: `
<ul>
    <li *for="item in items">
        {{ item }}
    </li>
</ul>`
})
class Loops {
    initialize() {
        this.items = ['javascript', 'python', 'ruby'];
    }
}

export { Loops }