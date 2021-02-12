import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStatesComponent } from './team-states.component';

describe('TeamStatesComponent', () => {
  let component: TeamStatesComponent;
  let fixture: ComponentFixture<TeamStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
