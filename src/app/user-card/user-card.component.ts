import { Component } from '@angular/core';
import usersData from '../../assets/users.json';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [UsersComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  users: any[] = usersData;

  receiveFromChild(id : any){
    console.log("Recieved")
    this.users = this.users.filter(user => user.id !== id)
  }
}
