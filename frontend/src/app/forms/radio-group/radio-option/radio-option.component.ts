import {
  Component,
  OnInit,
  Input,
  HostListener,
  HostBinding,
  ElementRef,
} from '@angular/core';

import { RadioGroupService } from '../radio-group.service';
import { RadioOption } from '../radio-option.interface';

@Component({
  selector: 'app-radio-option',
  templateUrl: './radio-option.component.html',
  styleUrls: ['./radio-option.component.scss']
})
export class RadioOptionComponent implements OnInit, RadioOption {

  @Input() value: string;

  @HostBinding('tabindex')
  tabindex = 0;

  @HostBinding('class.selected')
  isSelected = false;

  constructor(
    private radioGroupService: RadioGroupService,
    public elementRef: ElementRef<HTMLElement>,
  ) { }

  ngOnInit() {
    this.radioGroupService.addOption(this);
    // console.log(this.radioGroupService.initialValue);
    // console.log(this); // all radiooption
  }

  @HostListener('click')
  select() {
    this.radioGroupService.select(this);
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === ' ') {
      this.select();
    }
  }
}

