import { Component, Ref, Output } from '../src/index'

@Component({
    element: 'MyComponent',
    template: `<button (click)="onClick()">Fire Event</button>`
})
export class MyComponent {
    @Output myCustomEvent;

    onClick() {
        this.myCustomEvent('some event payload');
    }
}

@Component({
    element: 'CustomEvents',
    template: `
<div>
    <p>Custom Events</p>
    <MyComponent (myCustomEvent)="alert($event)"></MyComponent>
</div>`
})
export class CustomEvents {
}