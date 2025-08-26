import { Component, OnInit } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',

})
export class ReportFormComponent implements OnInit {
  visitor: any = {};

  constructor(private route:ActivatedRoute, private http:HttpClient) { }

  ngOnInit(): void {
    const unitNo = this.route.snapshot.paramMap.get('unitNo'); // get param from URL
    
    if (unitNo) {
      
      this.http.get(`http://localhost:8080/api/visitors/unit?unitNo=${unitNo}`)
        .subscribe({
          next: (data) => {
            this.visitor = data;  // assign API response
          },
          error: (err) => console.error('Error fetching visitor', err)
        });
        
    }
  }
  }
