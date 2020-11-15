import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/user';
import { IUserLogin } from '../interfaces/user-login';
import { StorageService } from './storage.service';

@Injectable()
export class UserService {
  email: string = '';
  userId: string = '';
  userToken: string = '';
  private loginHttpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private logoutHttpOptions = {
    headers: new HttpHeaders({ 'user-token': this.userToken })
  };

  constructor(
    private storage: StorageService,
    private http: HttpClient) {
    this.email = this.storage.getItem('email');
    this.userId = this.storage.getItem('userId');
    this.userToken = this.storage.getItem('userToken');
  }

  login(email: string, password: string): void {
    const user = {
      login: email,
      password: password
    };

    const url: string = environment.backendless.url + environment.backendless.endpoints.login;

    this.http
      .post<IUserLogin>(url, JSON.stringify(user), this.loginHttpOptions)
      .subscribe(data => {
        this.email = data.email;
        this.userId = data.objectId;
        this.userToken = data["user-token"];
        this.storage.setItem('email', data.email);
        this.storage.setItem('userId', data.objectId);
        this.storage.setItem('userToken', data["user-token"]);
      });
  }

  register(email: string, password: string): void {
    const user = {
      email: email,
      password: password
    };

    const url: string = environment.backendless.url + environment.backendless.endpoints.register;

    this.http
      .post<IUser>(url, JSON.stringify(user), this.loginHttpOptions)
      .subscribe(data => {
        this.login(email, password);
      });

  }

  logout(): void {
    const url: string = environment.backendless.url + environment.backendless.endpoints.logout;

    this.http
      .get(url, this.logoutHttpOptions)
      .subscribe(_ => {
        this.email = '';
        this.userId = '';
        this.userToken = '';
        this.storage.setItem('email', '');
        this.storage.setItem('userId', '');
        this.storage.setItem('userToken', '');
      });
  }
}
