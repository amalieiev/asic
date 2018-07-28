import './stylesheets/normalize.css'
import './stylesheets/github-light.css'
import './stylesheets/stylesheet.css'

@Component({
    template:`
<section class="page-header">
    <h1 class="project-name">Asic</h1>

    <h2 class="project-tagline">Progressive JavaScript Framework</h2>
    <a href="https://github.com/amalieiev/asic" class="btn">View on GitHub</a>
    <a href="https://jsfiddle.net/amalieiev/zdmq82ce/" class="btn">Try on JSFiddle</a>
    <a href="https://github.com/amalieiev/asic/zipball/master" class="btn">Download .zip</a>
    
    <div class="row">
        <div class="col-sm-3 offset-md-3">
            <ul>
                <li>No boilerplate code</li>
            </ul>
        </div>
        <div class="col-sm-3">
            <ul>
                <li>5kb size</li>
            </ul>
        </div>
    </div>
</section>
    `
})
class Header {

}