import { EventEmitter, NgZone, Injectable } from '@angular/core';

import { RadioOption } from './radio-option.interface';

@Injectable()
export class RadioGroupService {

  constructor(private zone: NgZone) { }

  initialValue: string;

  change = new EventEmitter<string>();

  options: RadioOption[] = [];

  addOption(option: RadioOption) {
    this.options.push(option);
    if (this.initialValue === option.value) {
      option.isSelected = true;
      this.zone.runOutsideAngular(() => setTimeout(
        () => option.elementRef.nativeElement.focus(),
      ));
    }
  }

  select(optionToSelect: RadioOption) {
    this.options.forEach(option => option.isSelected = false);
    optionToSelect.isSelected = true;
    this.change.next(optionToSelect.value);
  }

}
