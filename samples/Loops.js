@Component({
    template: `
<div>
    <h2>Loops</h2>
    <p>Active skill: <strong>{{ activeSkill }}</strong></p>
    <ul>
        <li *for="item in items">
            <span>{{ item.name }} skills: <strong *for="skill in item.skills" (click)="setActive(skill)">{{ skill }} </strong></span>
            <SimpleText></SimpleText>
        </li>
    </ul>
</div>`
})
class Loops {
    constructor() {
        this.activeSkill = '';
        this.items = [
            {name: 'John', skills: ['javascript', 'java']},
            {name: 'Adam', skills: ['python', 'ruby', 'html']}
        ];
    }
    setActive(skill) {
        this.activeSkill = skill;
    }
}