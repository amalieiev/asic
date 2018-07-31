@Component({
    template: `
<div>
    <p>Inner component</p>
    <p>{{ text }}</p>
</div>`
})
class SimpleText {
    initialize() {
        this.text = 'Simple text'
    }
}

export { SimpleText }