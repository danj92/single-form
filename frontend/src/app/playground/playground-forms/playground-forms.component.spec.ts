import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundFormsComponent } from './playground-forms.component';

describe('PlaygroundFormsComponent', () => {
  let component: PlaygroundFormsComponent;
  let fixture: ComponentFixture<PlaygroundFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
