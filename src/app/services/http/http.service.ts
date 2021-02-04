import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenModel, LoginModel, RegisterModel } from '../../models/user';
import { ApplicationService } from '../app/application.service';
import { AuthService } from "../auth/auth.service";
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthService) {}
  currentUser: TokenModel;
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to api url
    this.currentUser = this.authenticationService.currentUserValue();
    const isLoggedIn = this.currentUser && this.currentUser.token;
    if (isLoggedIn) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ` + this.currentUser.token,
        },
      });
    }

    return next.handle(request);
  }
}
