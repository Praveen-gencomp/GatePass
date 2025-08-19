import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ReportsService } from '../services/reports.service';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html'
 
})
export class ReportsComponent implements OnInit {
displayedColumns: string[] = ['status', 'in', 'out', 'name', 'telephoneNo', 'identity', 'toMeet','department']; // dynamic header names
  dataSource = new MatTableDataSource<any>([]);
  constructor(private reportsService:ReportsService) { }

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
  status: v.unitNo, // or derive from API
  in: v.visitingDateAndTime, // depends on your API field
  out: v.checkOutTime,
  name: v.visitorName,
   telephoneNo:v.telephoneNo,
  identity: v.identificationNo,
  toMeet:v.toMeet,
  department:v.deptName
 
  
}));
      },
      error: (err) => {
        console.error('Error fetching visitor data', err);
      }
    });
  }

}
