import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrintoutService {
  // private apiUrl = 'http://localhost:8080/api/visitors/unit?unitNo=${unitNo}';
   private apiUrl = 'http://localhost:8080/api/visitors/unit';

  constructor(private http: HttpClient) {}

  getVisitorByUnitNo(unitNo: string): Observable<any> {
    // return this.http.get<any>(`${this.apiUrl}/${unitNo}`);
    // return this.http.get<any>(`${this.apiUrl}/unit`, { params: { unitNo } });
     return this.http.get<any>(this.apiUrl, { params: { unitNo } });
  }
}
