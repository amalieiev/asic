import { Component } from '../src/index'

@Component({
    template: `
<div>
    <p>Active skill: <strong>{{ activeSkill }}</strong></p>
    <ul>
        <li *for="item in items">
            <span>{{ item.name }} skills:</span><button *for="skill in item.skills" (click)="setActive(skill)">{{ skill }}</button>
            <SimpleText></SimpleText>
        </li>
    </ul>
</div>`
})
export class InnerLoops {
    activeSkill = '';
    items = [
        {name: 'John', skills: ['javascript', 'java']},
        {name: 'Adam', skills: ['python', 'ruby', 'html']}
    ];

    setActive(skill) {
        this.activeSkill = skill;
    }
}