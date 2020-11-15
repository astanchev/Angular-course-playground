import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  registerHandler(f: NgForm): void {
    const { email, password, repeatPassword } = f.value;

    if (password === repeatPassword) {
      this.userService.register(email, password);
      this.router.navigate(['/']);
    }
  }
}
