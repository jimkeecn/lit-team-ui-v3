import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasterEventStoryboardComponent } from './easter-event-storyboard.component';

describe('EasterEventStoryboardComponent', () => {
  let component: EasterEventStoryboardComponent;
  let fixture: ComponentFixture<EasterEventStoryboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasterEventStoryboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasterEventStoryboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
