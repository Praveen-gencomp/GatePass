import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
 IsShow = true;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const hideHeaderRoutes = ['']; // Add more routes if needed
        this.IsShow = !hideHeaderRoutes.includes(event.url);
      }
    });
   }

  ngOnInit(): void {
  }

}
