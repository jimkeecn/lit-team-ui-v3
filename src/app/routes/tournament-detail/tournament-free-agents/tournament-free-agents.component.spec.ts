import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentFreeAgentsComponent } from './tournament-free-agents.component';

describe('TournamentFreeAgentsComponent', () => {
  let component: TournamentFreeAgentsComponent;
  let fixture: ComponentFixture<TournamentFreeAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentFreeAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentFreeAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
