import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginUrl = 'http://localhost:8080/api/auth/login';

  constructor(private http: HttpClient) { }

  // login(loginData: { loginId: string; password: string }): Observable<string> {
  //   return this.http.post(this.loginUrl, loginData, { responseType: 'text' });
  // }
  // login(credentials: { loginId: string; password: string }): Observable<Message> {
  //   return this.http.post<Message>(`${this.loginUrl}/login`, credentials);
  // }
 login(loginData: { loginId: string; password: string }): Observable<string> {
    return this.http.post(this.loginUrl, loginData, { responseType: 'text' });
  }
}
