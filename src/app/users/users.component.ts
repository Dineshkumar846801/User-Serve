import { Component  } from '@angular/core';
import { LogginServices } from '../services/Loginservices';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  providers:[LogginServices]
})
export class UsersComponent {
  constructor(private Login : LogginServices){}
  userName :string = '';
  userList : string[] = [];

  addName(name:string){
    this.userList.push(name);
    this.Login.logInToConsole('Users component: ' + name)
  }
}
