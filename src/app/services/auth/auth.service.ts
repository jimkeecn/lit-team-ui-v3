import { Injectable, OnChanges } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from "rxjs/operators";
import { TokenModel, LoginModel, RegisterModel } from '../../models/user';
import { ApplicationService } from '../app/application.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = '';
  public currentUserSubject: BehaviorSubject<TokenModel>;
  public currentUser: Observable<TokenModel>;
  constructor(
    private http: HttpClient,
    private route: Router,
    private app:ApplicationService
  ) {
    this.baseUrl = environment.url;
    this.currentUserSubject = new BehaviorSubject<TokenModel>(
      JSON.parse(localStorage.getItem('aol-test-currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(loginModel: LoginModel): Observable<TokenModel> {
    const url = `${this.baseUrl}/user`;
    return this.http.post<TokenModel>(url, loginModel).pipe(tap(x=>{
      this.localStorageToken(x);
      this.currentUserSubject.next(x);
    }));
  }

  getMyDetail(): Observable<any> {
    const url = `${this.baseUrl}/user`;
    return this.http.get<any>(url).pipe(tap(user=>{
      var data = { ...this.currentUserSubject.value };
      data.user = user;
      this.currentUserSubject.next(data);
    }));
  }

  register(registerModel: RegisterModel) : Observable<TokenModel>{
    const url = `${this.baseUrl}/user`;
    return this.http.put<TokenModel>(url, registerModel).pipe(tap(x=>{
    
    }));
  }

  confirmEmail(confirm: any) : Observable<any>{
    const url = `${this.baseUrl}/user/confirm`;
    return this.http.post<any>(url, confirm).pipe(tap(x=>{
    
    }));
  }

  resetPasswordRequest(confirm: any) : Observable<any>{
    const url = `${this.baseUrl}/user/requestReset`;
    return this.http.post<any>(url, confirm).pipe(tap(x=>{
    
    }));
  }

  resetPassword(password: any) : Observable<any>{
    const url = `${this.baseUrl}/user/resetpassword`;
    return this.http.post<any>(url, password).pipe(tap(x=>{
    
    }));
  }

  currentUserValue() {
    return JSON.parse(localStorage.getItem('aol-test-currentUser'));
  }

  isLogined() {
    if (JSON.parse(localStorage.getItem('aol-test-currentUser'))) {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('aol-test-currentUser');
    this.currentUserSubject.next(null);
    this.app.invitations$.next([]);
    this.app.myDetails$.next(null);
    this.route.navigate(['login']);
  }

  localStorageToken(user: TokenModel) {
    localStorage.setItem('aol-test-currentUser', JSON.stringify(user));
  }

  getMyId() {
    return this.currentUserSubject.value.user.id
  }
}
