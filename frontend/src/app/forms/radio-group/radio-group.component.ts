import {
  Component,
  OnInit,
  Input,
  Output,
} from '@angular/core';

import { RadioGroupService } from './radio-group.service';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  providers: [RadioGroupService],
})
export class RadioGroupComponent implements OnInit {

  @Input() value: string;

  @Output() change = this.radioGroupService.change;

  constructor(private radioGroupService: RadioGroupService) { }

  ngOnInit() {
    this.radioGroupService.initialValue = this.value;
  }

}
