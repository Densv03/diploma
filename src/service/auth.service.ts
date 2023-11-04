import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";
import { Observable, tap } from "rxjs";
import {HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private apiService: ApiService) { }
  public login(email: string, password: string): Observable<any> {
    return this.apiService.post('user/login', {email, password}, {
      observe: 'response'
    }).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.headers.get('Authorization'));
        localStorage.setItem('userId', response.headers.get('UserId'));
      }),
    )
  }

  public register(body: any): Observable<any> {
    return this.apiService.post('user', body).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.access_token);
      }),
    )
  }

  public isAuth(): boolean {
    return !!localStorage.getItem('token');
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }
}
