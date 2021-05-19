import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClanApiService {

  baseUrl: string = '';
  constructor(
    private http: HttpClient,
  ) {
    this.baseUrl = environment.url;
  }

  AmIClanOwner() : Observable<boolean>{
    const url = `${this.baseUrl}/Clan/AmIClanOwner`;
    return this.http.get<boolean>(url).pipe(tap(x=>{
      //do something
    }));
  }
}
