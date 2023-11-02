import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";
import { Observable, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private apiService: ApiService) { }
  public login(username: string, password: string): Observable<any> {
    return this.apiService.post('user/login', {username, password}).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.access_token);
      }),
    )
  }

  public register(username: string, password: string): Observable<any> {
    return this.apiService.post('user', {username, password}).pipe(
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
  }
}
