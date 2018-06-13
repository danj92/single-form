import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundColorsComponent } from './playground-colors.component';

describe('PlaygroundColorsComponent', () => {
  let component: PlaygroundColorsComponent;
  let fixture: ComponentFixture<PlaygroundColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
