import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrimStartNotificationComponent } from './scrim-start-notification.component';

describe('ScrimStartNotificationComponent', () => {
  let component: ScrimStartNotificationComponent;
  let fixture: ComponentFixture<ScrimStartNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrimStartNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrimStartNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
