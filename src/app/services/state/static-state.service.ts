import { Injectable } from '@angular/core';
import { NotificationType } from '@app-models/static';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaticStateService {

  notificationTypes$ = new BehaviorSubject<NotificationType[]>([]);

  constructor() { }
}
