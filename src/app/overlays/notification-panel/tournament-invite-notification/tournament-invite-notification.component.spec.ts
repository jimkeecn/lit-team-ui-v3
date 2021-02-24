import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentInviteNotificationComponent } from './tournament-invite-notification.component';

describe('TournamentInviteNotificationComponent', () => {
  let component: TournamentInviteNotificationComponent;
  let fixture: ComponentFixture<TournamentInviteNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentInviteNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentInviteNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
