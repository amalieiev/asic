@Component({
    template: `
<div>
    <h2>Simple Text</h2>
    <p>Inner component</p>
    <p>{{ text }}</p>
</div>`
})
class SimpleText {
    constructor() {
        this.text = 'Simple text'
    }
}