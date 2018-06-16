import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../shared/data.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() userName: string;
  @Input() userAge: number;

  message: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    // console.log(this.message);
  }

  newMessage() {
    this.data.changeMessage('HELLO MOTO');
  }

}
