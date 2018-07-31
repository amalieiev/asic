@Component({
    template: `
<div>
    <p>My Component</p>
    <p>{{ text }}</p>
</div>`
})
class BasicUsage {
    initialize() {
        this.text = 'Some Text'
    }
}

export { BasicUsage }