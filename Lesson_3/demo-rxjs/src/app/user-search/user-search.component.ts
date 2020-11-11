import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { IUser } from '../interfaces/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  users$: Observable<IUser[]>;
  searchTerms:Subject<string> = new Subject<string>();

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.usersService.searchUsers(term)),
    )
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
