import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { VALIDATION_MESSAGES } from '../../landing-page/landing-page/validation-messages';


@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss']
})
export class FormErrorsComponent implements OnInit {

@Input('control') control: FormControl;

  constructor() { }

  ngOnInit() {
    // console.log(this.control);
  }

  get errors() {
    if (this.control.touched && this.control.errors) {
      return Object.keys(this.control.errors).map(e => {
        const error = this.control.errors[e];
        return VALIDATION_MESSAGES[e] ? VALIDATION_MESSAGES[e](error) : error;
      });
    } else {
      return [];
    }
  }


}
