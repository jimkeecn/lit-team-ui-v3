import { Injectable } from '@angular/core';
import { NotificationDTO } from '@app-models/notification';
import { NotificationApiService } from '@app-services/api/notification-api.service';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationStateService {

  notifications$ = new BehaviorSubject<NotificationDTO[]>([]);

  constructor(private api:NotificationApiService) { }

  removeFromNotifications(index) {
    let invs = [...this.notifications$.value];
    invs.splice(index, 1);
    this.notifications$.next(invs);
  }

  archiveNotification(id, index) {
    this.api.setMyNotificationIsView(id).subscribe(res => {
      this.removeFromNotifications(index);
    })
  }
  
}
