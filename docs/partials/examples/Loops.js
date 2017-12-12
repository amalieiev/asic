import { Component } from 'asic';

@Component({
  template: `
  <div>
    <p>Users:</p>
    <ul>
        <li *for="user in users">
            <span>{{ user.name }} skills:</span>           
            <ul><li *for="skill in user.skills">{{ skill }}</li></ul>
        </li>
    </ul>
  </div>`
})
class Loops {
  constructor () {
    this.users = [
        {name: 'Fill', skills: ['javascript', 'java']},
        {name: 'Adam', skills: ['python', 'ruby']}
    ]
  }
}
