@Component({
    template: `
<div>
    <p>Text: {{ text }}</p>
    <SimpleText></SimpleText>
</div>`
})
class Interpolation {
    constructor() {
        this.text = 'Hello Asic'
    }
}