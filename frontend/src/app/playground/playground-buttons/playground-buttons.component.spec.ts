import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundButtonsComponent } from './playground-buttons.component';

describe('PlaygroundButtonsComponent', () => {
  let component: PlaygroundButtonsComponent;
  let fixture: ComponentFixture<PlaygroundButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
