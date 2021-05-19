import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingScrimsComponent } from './upcoming-scrims.component';

describe('UpcomingScrimsComponent', () => {
  let component: UpcomingScrimsComponent;
  let fixture: ComponentFixture<UpcomingScrimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingScrimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingScrimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
