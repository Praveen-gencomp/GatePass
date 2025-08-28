import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.serice';

;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})

export class HeaderComponent implements OnInit {
    loginUser: any;
    currentDate: Date = new Date(); // system current date
 navigationItems: any[] = [];
  constructor(private authService:AuthService, private navigationService:NavigationService, private http:HttpClient, private router:Router, private userService: UserService) 
  {   
  }
    ngOnInit(): void {
    // Hardcode loginId for now (later get it from session/localStorage)
    const loginId = "unit1";
    // const loginId = localStorage.getItem("loginId");

    this.http.get<any>(`http://localhost:8080/api/auth/${loginId}`)
      .subscribe(data => {
        this.loginUser = data;
      });
    // Update currentDate every minute (optional)
    setInterval(() => {
      this.currentDate = new Date();
    }, 60000);

       // ✅ Get navigation items
    this.navigationService.getNavigation().subscribe((data: any) => {
      this.navigationItems = data;
    });
  }
// logout() {
//     // localStorage.removeItem('loginId');
//     this.router.navigate(['/']);
//     // window.location.href = '/login';
//   }
logout() {
    this.userService.logout().subscribe({
      next: () => {
        // Clear storage (if you are saving loginId / token)
        // localStorage.removeItem('loginId');
        localStorage.removeItem('unit1');
        sessionStorage.clear();

        // Navigate to login page
        this.router.navigate(['/']);
      },
      error: () => {
        alert('Error during logout');
      }
    });
  }
  }

  



