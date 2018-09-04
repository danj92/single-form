import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMixForageNaturalComponent } from './form-mix-forage-natural.component';

describe('FormMixForageNaturalComponent', () => {
  let component: FormMixForageNaturalComponent;
  let fixture: ComponentFixture<FormMixForageNaturalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMixForageNaturalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMixForageNaturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
