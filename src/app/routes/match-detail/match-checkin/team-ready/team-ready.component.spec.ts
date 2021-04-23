import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamReadyComponent } from './team-ready.component';

describe('TeamReadyComponent', () => {
  let component: TeamReadyComponent;
  let fixture: ComponentFixture<TeamReadyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamReadyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
