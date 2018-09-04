import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompanyDataComponent } from './form-company-data.component';

describe('FormCompanyDataComponent', () => {
  let component: FormCompanyDataComponent;
  let fixture: ComponentFixture<FormCompanyDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCompanyDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCompanyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
