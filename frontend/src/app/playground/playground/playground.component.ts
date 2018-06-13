import { Component, OnInit } from '@angular/core';

import { playgroundChildrenRoutes } from '../playground-children.routing';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  NAVIGATION_ITEMS = playgroundChildrenRoutes.filter(r => r.component).map(r => {
    return {label: r.path, path: r.path};
  });

  constructor() { }

  ngOnInit() {
  }

}
