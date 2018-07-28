# Asic
Progressive JavaScript Framework

## Features & characteristics:
* No boilerplate code
* Data Binding
* 5kb size

## Documentation and Examples
https://amalieiev.github.io/asic/


## Install & basic usage

#### npm
```bash
npm install asic
```

#### javascript
```javascript
@Component({
    template: `
<div>
    <p>Inner component</p>
    <p>{{ text }}</p>
</div>`
})
class SimpleText {
    constructor() {
        this.text = 'Simple text'
    }
}
```

#### html
```html
<SimpleText></SimpleText>
```

## JSFiddle

[Example JSFiddle](https://jsfiddle.net/amalieiev/zdmq82ce/) – Use this for issue reproduction.
