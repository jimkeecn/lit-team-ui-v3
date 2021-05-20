import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrimAcceptNotificationComponent } from './scrim-accept-notification.component';

describe('ScrimAcceptNotificationComponent', () => {
  let component: ScrimAcceptNotificationComponent;
  let fixture: ComponentFixture<ScrimAcceptNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrimAcceptNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrimAcceptNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
