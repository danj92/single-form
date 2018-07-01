import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() name: string;

  @Input('control') formControl: FormControl;

  @Output() change = new EventEmitter<boolean>();

  @ViewChild('checkbox') checkboxRef: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit() {

  }

  get icon() {
    return this.formControl.value ? 'yes' : '';
  }

  @HostListener('click')
  toggleCheckbox() {
    this.checkboxRef.nativeElement.focus();
    const newValue = !this.formControl.value;
    this.formControl.setValue(newValue);
    this.change.next(newValue);
  }


}
