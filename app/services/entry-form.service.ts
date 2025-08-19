import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntryFormService {
  private apiUrl = 'http://localhost:8080/api/visitors';

  constructor(private http: HttpClient) {}

 
  registerVisitor(visitorData: any): Observable<any> {
    return this.http.post(this.apiUrl, visitorData);
  }
}
