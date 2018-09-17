import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { myValidator } from './validators';
import { DataFormService } from '../../shared/data-form.service';


@Component({
  selector: 'app-form-company-data',
  templateUrl: './form-company-data.component.html',
  styleUrls: ['./form-company-data.component.scss']
})
export class FormCompanyDataComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dataFormService: DataFormService,
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      companyName: new FormControl('', [Validators.required, myValidator]),
      street: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      nip: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      telephone24: new FormControl('', Validators.required),
      manager: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      krs: new FormControl('', Validators.required),
      checkbox1: new FormControl(false,  Validators.requiredTrue),
    });
  }

  onSubmit() {
    // const data = this.formGroup.value;
    this.router.navigate(['company-data/result']);
  }

}
