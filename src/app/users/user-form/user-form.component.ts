import { Component, EventEmitter, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import { IUser } from '../modelo/iuser';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnChanges {
  @Output() userAdded = new EventEmitter<IUser>();
  @Input() maxId: number = 0;

  user: IUser = {
    id: 0,
    name: "",
    username: "",
    phone: "",
    website: ""
  };

  agregar(): void {
    const newUser: IUser = { ...this.user, id: this.maxId + 1 };
    this.userAdded.emit(newUser);
    this.user = { id: 0, name: "", username: "", phone: "", website: "" };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['maxId']) {
      this.maxId = changes['maxId'].currentValue;
    }
  }
}