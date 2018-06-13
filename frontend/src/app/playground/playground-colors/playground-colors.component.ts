import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground-colors',
  templateUrl: './playground-colors.component.html',
  styleUrls: ['./playground-colors.component.scss']
})
export class PlaygroundColorsComponent implements OnInit {

  MISSING_COLOR = 'repeating-linear-gradient(45deg, transparent, ' +
    'transparent 5px, #dddddd 5px, #dddddd 10px)';


  BASE_COLORS = [
    '--content',
    '--font-color',
    '--primary',
    '--secondary',
    '--warning',
    '--danger',
  ];

  SHADES = [
    '-very-light',
    '-light',
    '',
    '-dark',
    '-very-dark',
  ];

  constructor() { }

  ngOnInit() {
  }

  getColorValue(colorName: string) {
    return getComputedStyle(document.body).getPropertyValue(colorName);
  }

  getColorName(baseColor: string, shade: string) {
    return this.getColorValue(baseColor + shade) || this.MISSING_COLOR;
  }


}
