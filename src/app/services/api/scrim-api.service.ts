import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';
import { ApplicationService } from '@app-services/app/application.service';
import { environment } from "../../../environments/environment";
import { ScrimUpdateModel } from '@app-models/scrim';

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
    const url = `${this.baseUrl}/scrim`;
    return this.http.put<number>(url,model).pipe(tap(x=>{
      //do something
    }));
  }
}
