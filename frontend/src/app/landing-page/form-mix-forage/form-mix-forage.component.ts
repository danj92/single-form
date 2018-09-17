import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { DataFormService } from '../../shared/data-form.service';


@Component({
  selector: 'app-form-mix-forage',
  templateUrl: './form-mix-forage.component.html',
  styleUrls: ['./form-mix-forage.component.scss']
})
export class FormMixForageComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataFormService: DataFormService
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      company1: new FormControl('', Validators.required),
      company2: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log('forage');


    const data = this.formGroup.value;


    this.dataFormService.setDataForm('company1', this.formGroup.value);
    this.dataFormService.setDataForm('company2', this.formGroup.value);

    this.router.navigate(['/company-data']);
  }
}
