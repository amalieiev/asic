import { Component } from '../src/index'

@Component({
    element: 'SimpleText',
    template: `<p>{{ text }}</p>`
})
export class SimpleText {
    text = 'Simple Text';
}