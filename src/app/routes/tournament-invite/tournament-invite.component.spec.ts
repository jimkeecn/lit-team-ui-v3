import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentInviteComponent } from './tournament-invite.component';

describe('TournamentInviteComponent', () => {
  let component: TournamentInviteComponent;
  let fixture: ComponentFixture<TournamentInviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentInviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
