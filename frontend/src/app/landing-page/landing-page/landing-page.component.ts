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

  formGroup: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dataForm: DataFormService,
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      companyName: new FormControl('', [Validators.required, myValidator]),
      street: new FormControl('', Validators.required)
    });

  }

  onSubmit() {

    const data = this.formGroup.value;

    console.log(data.companyName, data.street);
    // this.dataForm.setDataForm(data.companyName, data.street);

    // this.router.navigate(['/result']);
  }



}
