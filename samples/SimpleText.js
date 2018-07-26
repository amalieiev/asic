@Component({
    template: `
<div>
    <p>Inner component</p>
    <p>{{ text }}</p>
</div>`
})
class SimpleText {
    constructor() {
        this.text = 'Simple text'
    }
}