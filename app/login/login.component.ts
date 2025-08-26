import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.serice';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit{


  loginId: string = '';
  password: string = '';
  errorMessage = '';
  currentDate: string = '';

  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    this.updateDate();

    // 🔄 Update every 1 minute
    interval(60000).subscribe(() => this.updateDate());
  }

  updateDate() {
    const now = new Date();
    this.currentDate = now.toLocaleString('en-GB', {  
      // day: '2-digit', month: '2-digit', year: 'numeric',
      // hour: '2-digit', minute: '2-digit', hour12: true  
    day: '2-digit',          
    month: 'short',          
    year: 'numeric',         
    hour: '2-digit',         
    minute: '2-digit',       
    hour12: true           
    }).replace(/am|pm/, match => match.toUpperCase());
  }



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
  // setInterval(() => {
  //     this.currentDate = new Date();
  //   }, 60000);

  
}
