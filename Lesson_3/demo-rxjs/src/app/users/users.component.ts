import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users$: Observable<IUser[]>;

  constructor(private usersService: UsersService) {
    this.users$ = this.usersService.loadUsers();
  }
}
