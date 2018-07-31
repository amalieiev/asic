@Component({
    template: `
<div>
    <p>{{ text }}</p>
    <SimpleText></SimpleText>
</div>`
})
class ComplexComponent {
    constructor() {
        this.text = 'Parent component'
    }
}

export { ComplexComponent }