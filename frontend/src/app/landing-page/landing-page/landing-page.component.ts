import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements AfterViewInit {

  message = 'hello world';

  @ViewChild(ChildComponent) child;

  formGroup: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) { }

  // ngOnInit() {
  //   this.formGroup = this.fb.group({
  //     companyName: new FormControl('', Validators.required),
  //     street: new FormControl('', Validators.required)
  //   });
  // }

  ngAfterViewInit() {
    this.message = this.child.message;
  }

  onSubmit() {

    const formData = this.formGroup.value;

    // this.router.navigate(['/result']);
  }

  receiveMessage($event) {
    this.message = $event;
    console.log($event);
  }

}
