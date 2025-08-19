import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.serice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {


  loginId: string = '';
  password: string = '';
  errorMessage = '';

  constructor(private userService: UserService, private router: Router) { }

  // ngOnInit(): void {
  // }
login() {
    this.userService.login({ loginId: this.loginId, password: this.password }).subscribe({
      next: (response) => {
        alert(response); // Shows "Login successful" or "Invalid credentials"
        if (response === 'Login successful') {
          this.router.navigate(['/welcome']);
        } else {
          this.errorMessage = 'Invalid credentials';
        }
      },
      error: () => {
        this.errorMessage = 'Error connecting to server';
      }
    });
  }
}
