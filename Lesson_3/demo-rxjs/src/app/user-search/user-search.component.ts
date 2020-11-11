import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
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
      tap(console.log),
      debounceTime(300),
      tap(console.log),
      distinctUntilChanged(),
      tap(console.log),
      switchMap((term: string) => this.usersService.searchUsers(term)),
      tap(console.log),
    )
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
