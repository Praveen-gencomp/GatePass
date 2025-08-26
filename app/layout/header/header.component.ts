import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})

export class HeaderComponent implements OnInit {
    loginUser: any;
    currentDate: Date = new Date(); // system current date
 navigationItems: any[] = [];
  constructor(private authService:AuthService, private navigationService:NavigationService, private http:HttpClient, private router:Router) 
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
logout() {
    // localStorage.removeItem('loginId');
    this.router.navigate(['/']);
    // window.location.href = '/login';
    
  }
  }

  



