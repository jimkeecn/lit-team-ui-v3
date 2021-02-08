import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchSocialMediaComponent } from './match-social-media.component';

describe('MatchSocialMediaComponent', () => {
  let component: MatchSocialMediaComponent;
  let fixture: ComponentFixture<MatchSocialMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchSocialMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
