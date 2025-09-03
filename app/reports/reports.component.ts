import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ReportsService } from '../services/reports.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html'
 
})
export class ReportsComponent implements OnInit {
   fromDate!: string;
  toDate!: string;
  reportData: any[] = [];
// displayedColumns: string[] = ['status', 'in', 'out', 'name', 'telephoneNo', 'identity', 'toMeet','department']; // dynamic header names
displayedColumns: string[] = ['unitNo', 'in', 'out', 'name', 'telephoneNo', 'identity', 'toMeet','department'];
  dataSource = new MatTableDataSource<any>([]);
  constructor(private reportsService:ReportsService, private http: HttpClient) { }

  ngOnInit(): void {
    //  const dynamicData = [
    //   { status: '', in: '17/08/2021 5:00:00 AM', out: '17/08/2021 8:00:00 AM', name: 'JENNEN HALLWAY', identity: 8551551 },
    //   { status: '', in: '17/08/2021 5:00:00 AM', out: '17/08/2021 8:00:00 AM', name: 'GENNY JEN', identity: 8551551},
    //   { status: '', in: '17/08/2021 5:00:00 AM', out: '17/08/2021 8:00:00 AM', name: 'SUSHILA RAMAN', identity: 8551551},
    // ];
    // this.dataSource.data = dynamicData;
     this.reportsService.getVisitors().subscribe({
      next: (data) => {

        console.log('Visitor data:', data);
        //this.dataSource.data = data;
        this.dataSource.data = data.map(v => ({
  // status: v.unitNo, // or derive from API
  unitNo: v.unitNo,
  in: v.visitingDateAndTime,
  out: v.checkOutTime,
  visitorName: v.visitorName,
   telephoneNo:v.telephoneNo,
  identificationNo: v.identificationNo,
  toMeet:v.toMeet,
  deptName:v.deptName
 
  
}));
      },
      error: (err) => {
        console.error('Error fetching visitor data', err);
      }
    });
  }

  getReport() {
    if (!this.fromDate || !this.toDate) {
      alert('Please select both dates');
      return;
    }

    this.http.get<any[]>(
      `http://localhost:8080/api/visitors/filter?fromDate=${this.fromDate}&toDate=${this.toDate}`
    ).subscribe(data => {
      this.dataSource.data = data;
    });
  }

}
