@Component({
    template:`
<section class="main-content">
    <footer class="site-footer">
        <span class="site-footer-owner"><a href="https://github.com/amalieiev/asic">{{ title }}</a> is maintained by <a
                    href="https://github.com/amalieiev">{{ author }}</a>. Our other libraries <a href="https://amalieiev.github.io/vue-crosstab" target="_blank" style="color: #159957;">Vue Crosstab</a>.</span>
    </footer>
</section>
    `
})
class Footer {
    constructor() {
        this.title = 'Asic';
        this.author = 'amalieiev'
    }
}