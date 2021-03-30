import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasterEventHelpComponent } from './easter-event-help.component';

describe('EasterEventHelpComponent', () => {
  let component: EasterEventHelpComponent;
  let fixture: ComponentFixture<EasterEventHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasterEventHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasterEventHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
