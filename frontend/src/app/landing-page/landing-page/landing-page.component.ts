import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataFormService } from '../../shared/data-form.service';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  businessType = 'trading_company';

  formGroup: FormGroup;


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dataForm: DataFormService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      companyName: new FormControl('', [Validators.required]),
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
      data.checkbox1,
    );

    this.router.navigate(['/result']);
  }



}
