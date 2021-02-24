import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '@app-services/api/api.service';
import { ApplicationService } from '@app-services/app/application.service';

@Component({
  selector: '[tournament-invite-notification]',
  templateUrl: './tournament-invite-notification.component.html',
  styleUrls: ['./tournament-invite-notification.component.scss']
})
export class TournamentInviteNotificationComponent implements OnInit {

  @Input() data: any;
  constructor(public app:ApplicationService, public api:ApiService) { }

  ngOnInit(): void {
  }

  accept(id) {
    console.log(id);
    this.api.acceptApplication(id).subscribe(res => { 
      this.app.openSnackBar(`Start journey with your clan mates!`, 'success');
      this.app.removeFromInvitations(id);
    }, (err: HttpErrorResponse) => {
      this.app.errorHandler(err);
    })
  }

  reject(id) {
    console.log(id);
    this.api.denialApplication(id).subscribe(res => { 
      this.app.openSnackBar(`You rejected an invitation`, 'success');
      this.app.removeFromInvitations(id);
    }, (err: HttpErrorResponse) => {
      this.app.errorHandler(err);
    })
  }

}
