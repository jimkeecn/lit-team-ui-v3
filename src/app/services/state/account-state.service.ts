import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Location } from "@angular/common";
import { BehaviorSubject } from 'rxjs';
import { AccountMenuState } from '@app-models/static';
import { AuthService } from '@app-services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountStateService {

  menuState$ = new BehaviorSubject<AccountMenuState>(1);
  constructor(private route: Router,location: Location,) {
    this.route.events.subscribe(val => {
      var url = location.path();

      if (url.includes("setting")) {
        this.menuState$.next(1);
      }
      else if (url.includes("games")) {
        this.menuState$.next(2);
      }
      else if (url.includes("clan")) {
        this.menuState$.next(3);
      }
    })
   }
}
