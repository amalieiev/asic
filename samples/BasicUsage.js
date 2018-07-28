@Component({
    template: `
<div>
    <p>My Component</p>
    <p>{{ text }}</p>
</div>`
})
class BasicUsage {
    constructor() {
        this.text = 'Some Text'
    }
}