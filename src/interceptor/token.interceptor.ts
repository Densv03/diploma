import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let req = request;
    if (localStorage.getItem('token')) {
      req = request.clone({
        setHeaders: {
          Authorization: `${localStorage.getItem('token')}`,
          UserId: `${localStorage.getItem('userId')}`
        }
      });
    }
    return next.handle(req);
  }
}
