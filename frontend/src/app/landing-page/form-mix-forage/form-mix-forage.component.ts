import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-form-mix-forage',
  templateUrl: './form-mix-forage.component.html',
  styleUrls: ['./form-mix-forage.component.scss']
})
export class FormMixForageComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      company1: new FormControl('', Validators.required),
      company2: new FormControl('', Validators.required),
    });
  }

}
