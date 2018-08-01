import { Component } from '../src/index'

@Component({
    template:`
<section class="page-header">
    <h1 class="project-name">Asic</h1>

    <h2 class="project-tagline">Progressive JavaScript Framework</h2>
    
    <div class="badges">
        <img src="https://img.shields.io/npm/dm/asic.svg" alt="shields">
        <img src="https://camo.githubusercontent.com/d0e25b09a82bc4bfde9f1e048a092752eebbb4f3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e7376673f7374796c653d666c6174" alt="License" data-canonical-src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat">
    </div>

    <a href="https://github.com/amalieiev/asic" target="_blank" class="btn">View on GitHub</a>
    <a href="https://jsfiddle.net/amalieiev/zdmq82ce/" target="_blank" class="btn">Try on JSFiddle</a>
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
export class Header {

}