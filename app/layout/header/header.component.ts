import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
 navigationItems: any[] = [];
  constructor(private navigationService: NavigationService) 
  {
      
  }
  ngOnInit() {
    this.navigationService.getNavigation().subscribe(data => {
      this.navigationItems = data;
    });
  }
}

