import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTournamentHistoryComponent } from './team-tournament-history.component';

describe('TeamTournamentHistoryComponent', () => {
  let component: TeamTournamentHistoryComponent;
  let fixture: ComponentFixture<TeamTournamentHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamTournamentHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamTournamentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
