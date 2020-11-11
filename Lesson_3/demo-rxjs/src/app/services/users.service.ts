import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, tap, map } from 'rxjs/operators';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(public http: HttpClient) { }

  loadUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url);
  }

  searchUsers(term: string): Observable<IUser[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<IUser[]>(this.url).pipe(
      map((data: IUser[]) => data.filter(u => (u.name).toLowerCase().indexOf(term) >= 0))
    );
  }
}
