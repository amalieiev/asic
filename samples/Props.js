@Component({
    template: `
<div>
    <p>Props</p>
    <p>{{ text }}</p>
</div>`
})
class Props {
    constructor() {
        this.text = 'Some Text'
    }
}

export { Props }