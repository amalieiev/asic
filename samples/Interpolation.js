@Component({
    template: `
<div>
    <h2>Interpolation</h2>
    <p>Text: {{ text }}</p>
    <SimpleText></SimpleText>
</div>`
})
class Interpolation {
    constructor() {
        this.text = 'Hello Asic'
    }
}