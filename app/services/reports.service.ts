import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private baseUrl = 'http://localhost:8080/api/visitors';

  // for filter date
  // private apiUrl = 'http://localhost:8080/api/visitors/filter';
  private apiUrl = 'http://localhost:8080/api/visitors';

  constructor(private http: HttpClient) {}

 
  getVisitors(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  // for filter date
  getReportByDate(fromDate: string, toDate: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/filter`, {
      params: { fromDate, toDate }
    });
    //  return this.http.get<any[]>(`${this.baseUrl}/report?fromDate=${fromDate}&toDate=${toDate}`);
  }
}
