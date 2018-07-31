@Component({
    template: `
<div>
    <p>Active skill: <strong>{{ activeSkill }}</strong></p>
    <ul>
        <li *for="item in items">
            <span>{{ item.name }} skills: <strong *for="skill in item.skills" (click)="setActive(skill)">{{ skill }} </strong></span>
            <SimpleText></SimpleText>
        </li>
    </ul>
</div>`
})
class InnerLoops {
    initialize() {
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

export { InnerLoops }