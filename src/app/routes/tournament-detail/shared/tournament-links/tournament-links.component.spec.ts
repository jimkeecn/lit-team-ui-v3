import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentLinksComponent } from './tournament-links.component';

describe('TournamentLinksComponent', () => {
  let component: TournamentLinksComponent;
  let fixture: ComponentFixture<TournamentLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
