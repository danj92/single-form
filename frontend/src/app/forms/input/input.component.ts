import { Component, OnInit, Input } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() name = '';

  @Input() type = '';

  @Input('form') formGroup: FormGroup;

  // @Input('formControl') formControl: FormControl;

  constructor() { }

  ngOnInit() {
  }

}
