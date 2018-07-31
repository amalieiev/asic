@Component({
    template: `
<div>
    <p>{{ text }}</p>
    <SimpleText></SimpleText>
</div>`
})
class ComplexComponent {
    initialize() {
        this.text = 'Parent component'
    }
}

export { ComplexComponent }