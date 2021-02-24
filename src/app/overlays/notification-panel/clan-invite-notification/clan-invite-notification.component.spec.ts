import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanInviteNotificationComponent } from './clan-invite-notification.component';

describe('ClanInviteNotificationComponent', () => {
  let component: ClanInviteNotificationComponent;
  let fixture: ComponentFixture<ClanInviteNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanInviteNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanInviteNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
