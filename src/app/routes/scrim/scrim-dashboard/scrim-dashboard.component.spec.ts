import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrimDashboardComponent } from './scrim-dashboard.component';

describe('ScrimDashboardComponent', () => {
  let component: ScrimDashboardComponent;
  let fixture: ComponentFixture<ScrimDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrimDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrimDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
