import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchStatesComponent } from './match-states.component';

describe('MatchStatesComponent', () => {
  let component: MatchStatesComponent;
  let fixture: ComponentFixture<MatchStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
