import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMixForageComponent } from './form-mix-forage.component';

describe('FormMixForageComponent', () => {
  let component: FormMixForageComponent;
  let fixture: ComponentFixture<FormMixForageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMixForageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMixForageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
