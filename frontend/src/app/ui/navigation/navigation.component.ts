import { Component, OnInit, Input } from '@angular/core';

import { NavigationItem } from './navigation-item.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {


  @Input() items: NavigationItem[] = [];

  constructor() { }

  ngOnInit() {
  }

}
