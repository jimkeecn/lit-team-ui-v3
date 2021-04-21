import { Injectable, OnChanges } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from "rxjs/operators";
import { TokenModel, LoginModel, RegisterModel } from '../../models/user';
import { ApplicationService } from '../app/application.service';
import { NotificationType } from '@app-models/static';
import { SignalRService } from '@app-services/live/signal-r.service';
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
    private app: ApplicationService,
    private live:SignalRService
  ) {
    this.baseUrl = environment.url;
    this.currentUserSubject = new BehaviorSubject<TokenModel>(
      JSON.parse(localStorage.getItem('lit-team-currentUser'))
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
    return this.http.get<any>(url).pipe(tap(user => {
      var data = { ...this.currentUserSubject.value };
      data.user = user;
      this.currentUserSubject.next(data);
      this.live.startNotificationListening(data.user.id);
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
    return JSON.parse(localStorage.getItem('lit-team-currentUser'));
  }

  isLogined() {
    if (JSON.parse(localStorage.getItem('lit-team-currentUser'))) {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('lit-team-currentUser');
    this.currentUserSubject.next(null);
    this.app.invitations$.next([]);
    this.app.myDetails$.next(null);
    this.route.navigate(['sign']);
  }

  localStorageToken(user: TokenModel) {
    const ls : TokenModel = {
      token: user.token,
      expiration: user.expiration,
      user : null
    }
    localStorage.setItem('lit-team-currentUser', JSON.stringify(ls));
  }

  getMyId() {
    return this.currentUserSubject.value.user.id
  }


  /*** User Update APIs */
  updateAccountDetails(data: any) : Observable<any>{
  const url = `${this.baseUrl}/user/detail`;
  return this.http.post<any>(url, data).pipe(tap(x=>{
  
  }));
  }
  
  updateAccountSocial(data: any) : Observable<any>{
    const url = `${this.baseUrl}/user/social`;
    return this.http.post<any>(url, data).pipe(tap(x=>{
    
    }));
  }

  updateAccountTwitch(data: any) : Observable<any>{
    const url = `${this.baseUrl}/user/twitch`;
    return this.http.post<any>(url, data).pipe(tap(x=>{
    
    }));
  }

  updateAccountNotification(data:NotificationType[]):Observable<any>{
    const url = `${this.baseUrl}/user/notifications`;
    return this.http.post<any>(url,data).pipe(tap(x=>{
      //do something
    }));
  }
}
