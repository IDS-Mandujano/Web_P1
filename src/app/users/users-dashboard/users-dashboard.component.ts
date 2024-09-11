import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../modelo/iuser';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css'],
})
export class UsersDashboardComponent {
  user_list: IUser[] = [];
  maxId: number = 0;

  constructor(private _service: UserService) {
    this._service.getAll().subscribe(
      response => {
        this.user_list = response;
        this.maxId = this.user_list.length > 0 ? Math.max(...this.user_list.map(user => user.id)) : 0;
      }
    );
  }

  onUserAdded(newUser: IUser): void {
    this.user_list.push(newUser);
  }
}