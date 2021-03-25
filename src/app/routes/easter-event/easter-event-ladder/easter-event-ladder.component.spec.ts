import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasterEventLadderComponent } from './easter-event-ladder.component';

describe('EasterEventLadderComponent', () => {
  let component: EasterEventLadderComponent;
  let fixture: ComponentFixture<EasterEventLadderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasterEventLadderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasterEventLadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
