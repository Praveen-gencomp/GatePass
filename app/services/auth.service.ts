import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  getLoginUser(loginId: string): Observable<any> {
    // return this.http.get<any>(`${this.baseUrl}/user/${loginId}`);
    return this.http.get<any>(`http://localhost:8080/api/visitors/${loginId}`);
  }
}
