import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundTypographyComponent } from './playground-typography.component';

describe('PlaygroundTypographyComponent', () => {
  let component: PlaygroundTypographyComponent;
  let fixture: ComponentFixture<PlaygroundTypographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundTypographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
