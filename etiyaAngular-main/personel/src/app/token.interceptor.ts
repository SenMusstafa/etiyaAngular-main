import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private static readonly API_URL = "http://localhost:3000/api";

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.auth.getToken();
    if (token) {
      // giriş yapılmış ve token var ise request'in içine token ekleniyor.
      let tokenReq = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        },
        url: TokenInterceptor.API_URL + request.url
      });
      return next.handle(tokenReq);
    } else {
      // token yok, sadece url'in başına api url'i ekleniyor.
      let req = request.clone({
        url: TokenInterceptor.API_URL + request.url
      });
      return next.handle(req);
    }
  }
}
