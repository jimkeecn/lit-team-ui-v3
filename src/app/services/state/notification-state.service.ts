import { Injectable } from '@angular/core';
import { NotificationDTO } from '@app-models/notification';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationStateService {

  notifications$ = new BehaviorSubject<NotificationDTO[]>([]);

  constructor() { }

  removeFromNotifications(index) {
    let invs = [...this.notifications$.value];
    invs.splice(index, 1);
    this.notifications$.next(invs);
  }
  
}
