import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketCheckinNotificationComponent } from './bracket-checkin-notification.component';

describe('BracketCheckinNotificationComponent', () => {
  let component: BracketCheckinNotificationComponent;
  let fixture: ComponentFixture<BracketCheckinNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BracketCheckinNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketCheckinNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
