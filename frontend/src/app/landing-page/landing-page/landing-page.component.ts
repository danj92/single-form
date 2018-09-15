import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  selectForm = 'form1';

  constructor() { }

  ngOnInit() {

  }

  selectChangeHandler(event: any) {
    this.selectForm = event.target.value;
  }


}
