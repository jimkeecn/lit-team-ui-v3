import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';
import { ApplicationService } from '@app-services/app/application.service';
import { environment } from "../../../environments/environment";
import { ScrimUpdateModel, ScrimViewModel } from '@app-models/scrim';

@Injectable({
  providedIn: 'root'
})
export class ScrimApiService {

  baseUrl: string = '';
  constructor(
    private http: HttpClient,
  ) {
    this.baseUrl = environment.url;
  }

  CreateNewScrim(model:ScrimUpdateModel) : Observable<number>{
    const url = `${this.baseUrl}/Scrim`;
    return this.http.put<number>(url,model).pipe(tap(x=>{
      //do something
    }));
  }

  GetAllScrim() : Observable<ScrimViewModel[]>{
    const url = `${this.baseUrl}/Scrim`;
    return this.http.get<ScrimViewModel[]>(url).pipe(tap(x=>{
      //do something
    }));
  }

  GetMyScrim() : Observable<ScrimViewModel[]>{
    const url = `${this.baseUrl}/Scrim/My`;
    return this.http.get<ScrimViewModel[]>(url).pipe(tap(x=>{
      //do something
    }));
  }

  GetUpcomingScrim() : Observable<ScrimViewModel[]>{
    const url = `${this.baseUrl}/Scrim/Upcoming`;
    return this.http.get<ScrimViewModel[]>(url).pipe(tap(x=>{
      //do something
    }));
  }

  GetHistoryScrim() : Observable<ScrimViewModel[]>{
    const url = `${this.baseUrl}/Scrim/History`;
    return this.http.get<ScrimViewModel[]>(url).pipe(tap(x=>{
      //do something
    }));
  }

  disableScrimRequest(id) : Observable<number>{
    const url = `${this.baseUrl}/Scrim/${id}`;
    return this.http.delete<number>(url).pipe(tap(x=>{
      //do something
    }));
  }
}
