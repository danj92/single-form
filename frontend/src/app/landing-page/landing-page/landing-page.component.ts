import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  formGroup: FormGroup;

  message: string;

  name = 'Tom';
  age = 25;
  
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private data: DataService,
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      companyName: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required)
    });

    this.data.currentMessage.subscribe(message => this.message = message);
  }

  onSubmit() {

    const formData = this.formGroup.value;

    // this.router.navigate(['/result']);
  }

}
