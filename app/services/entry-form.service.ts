import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EntryFormService {
  private apiUrl = 'http://localhost:8080/api/visitors'; // JSON endpoint

  constructor(private http: HttpClient) {}

  // POST JSON including capturedImage (Base64)
  registerVisitor(visitorPayload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, visitorPayload);
  }
}
