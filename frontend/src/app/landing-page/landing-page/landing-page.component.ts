import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataFormService } from '../../shared/data-form.service';

import { myValidator } from './validators';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  test: string;

  formGroup: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dataForm: DataFormService,
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
    });

  }

  onSubmit() {
    const moje = 50;
    const data = this.formGroup.value;

    this.dataForm.setDataForm(
      data.companyName,
      data.street,
      data.country,
      data.nip,
      data.contact,
      data.telephone,
      data.telephone24,
      data.manager,
      data.email,
      data.krs,
    );

    this.router.navigate(['/result']);
  }



}
