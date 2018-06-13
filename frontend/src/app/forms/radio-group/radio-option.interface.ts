import { EventEmitter, ElementRef } from '@angular/core';

export interface RadioOption {
  isSelected: boolean;
  value: string;
  elementRef: ElementRef<HTMLElement>;
}
