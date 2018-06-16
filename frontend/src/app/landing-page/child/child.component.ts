import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../shared/data.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() userName: string;
   _userAge: number;



  @Input()
    set userAge(age: number) {
      if (age < 0) {
        this._userAge = 0;
      }
      else if (age > 100) {
        this._userAge = 100;
      } else {
        this._userAge = age;
      }
    }

    get userAge() {
      return this._userAge;
    }

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
