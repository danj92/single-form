import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() label: string;

  @Input() name = '';

  @Input() type = '';

  @Input('control') formControl: FormControl;

  constructor() { }

  ngOnInit() {
    // console.log(this.formControl);
  }

}
