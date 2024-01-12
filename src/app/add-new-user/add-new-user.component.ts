import { Component, EventEmitter ,Output , } from '@angular/core';
import { LogginServices } from '../services/Loginservices';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrl: './add-new-user.component.css',
  providers:[LogginServices]
})
export class AddNewUserComponent {
  userName:string = ''
@Output() onuserName :EventEmitter<any> = new EventEmitter();
constructor(private Login:LogginServices){}

addNewUser(){
  this.onuserName.emit(this.userName)
  this.Login.logInToConsole(this.userName)
  
}

}
