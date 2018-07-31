@Component({
    template: `
<div>
    <p>Props</p>
    <p>{{ foo }}</p>
    <p>{{ text }}</p>
</div>`
})
class Props {
    initialize(foo, bar) {
        this.text = bar;
        this.foo = foo;
    }
}

export { Props }