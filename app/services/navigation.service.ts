// navigation.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  constructor(private http: HttpClient) {}

  getNavigation(): Observable<any> {
    return this.http.get('/assets/data/navigation.json');
  }
}
