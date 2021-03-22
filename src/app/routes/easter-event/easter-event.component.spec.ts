import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasterEventComponent } from './easter-event.component';

describe('EasterEventComponent', () => {
  let component: EasterEventComponent;
  let fixture: ComponentFixture<EasterEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasterEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasterEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
