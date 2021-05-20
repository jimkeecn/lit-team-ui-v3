import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrimJoinNotificationComponent } from './scrim-join-notification.component';

describe('ScrimJoinNotificationComponent', () => {
  let component: ScrimJoinNotificationComponent;
  let fixture: ComponentFixture<ScrimJoinNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrimJoinNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrimJoinNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
