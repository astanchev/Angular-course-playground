import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  loginHandler(f: NgForm): void {
    const { email, password } = f.value;

    this.userService.login(email, password);
    this.router.navigate(['/']);
  }
}
