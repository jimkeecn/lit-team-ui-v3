import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';
import { ApplicationService } from '@app-services/app/application.service';
import { environment } from "../../../environments/environment";
import { NotificationDTO } from '@app-models/notification';
@Injectable({
  providedIn: 'root'
})
export class NotificationApiService {

  baseUrl: string = '';
  constructor(
    private http: HttpClient,
  ) {
    this.baseUrl = environment.url;
  }

  getMyNotification() : Observable<NotificationDTO[]>{
    const url = `${this.baseUrl}/notification`;
    return this.http.get<NotificationDTO[]>(url).pipe(tap(x=>{
      //do something
    }));
  }
}
