@Component({
    template:`
<section class="main-content">
    <footer class="site-footer">
        <span class="site-footer-owner"><a href="https://github.com/amalieiev/asic">{{ title }}</a> is maintained by <a
                    href="https://github.com/amalieiev">{{ author }}</a>.</span>
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