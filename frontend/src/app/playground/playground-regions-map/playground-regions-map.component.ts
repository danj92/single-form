import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  HostBinding,
  HostListener,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { HammerInput } from 'hammerjs';

// import 'hammerjs';

// import { Region } from '../contact.interface';

interface RegionShape {
  key: string;
  name: string;
  path: string;
}

interface ProvinceShape extends RegionShape {
  counties: RegionShape;
}


@Component({
  selector: 'app-playground-regions-map',
  templateUrl: './playground-regions-map.component.html',
  styleUrls: ['./playground-regions-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundRegionsMapComponent implements OnInit {

  svgTransform: SafeStyle;

  provincesData: ProvinceShape[];

  ZOOM_STEP = 1.05;

  MAX_SCALE = 4;

  MIN_SCALE = 0.863838;

  MAX_X = 300;

  MAX_Y = 200;

  VIEW_BOX = '0 0 800 745';

  private lastBlindTimer: any;

  scale = 1;

  moveX = 0;

  moveY = 0;

  deltaX = 0;

  deltaY = 0;

  @HostBinding('class.panning')
  isPanning = false;

  @HostBinding('class.tinted')
  isTintVisible = false;

  constructor(
    private http: HttpClient,
    private domSanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
    private elementRef: ElementRef<HTMLElement>
  ) { }

  showTint() {
    this.isTintVisible = true;
    clearTimeout(this.lastBlindTimer);
    this.lastBlindTimer = setTimeout(() => {
      this.isTintVisible = false;
      this.cdr.markForCheck();
    }, 1600);
  }

  ngOnInit() {
    this.http.get<ProvinceShape[]>('/assets/regions.json').subscribe(data => {
      this.provincesData = data;
      this.cdr.markForCheck();
    });
  }

  zoomOut() {
    if (this.scale > this.MIN_SCALE) {
      this.scale /= this.ZOOM_STEP;
      this.updateTransform();
    }
  }

  zoomIn() {
    if (this.scale < this.MAX_SCALE) {
      this.scale *= this.ZOOM_STEP;
      this.updateTransform();
    }
  }

  dblzoom(event) {
    this.scale *= this.ZOOM_STEP * 2;
    this.updateTransform();
  }

  onWheel(event: WheelEvent) {
    this.showTint();

    if (event.ctrlKey) {
      this.isTintVisible = false;

      const oldScale = this.scale;

      event.deltaY > 0 ? this.zoomOut() : this.zoomIn();

      const el = event.currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();

      const x = event.x - rect.left - rect.width / 2;
      const y = event.y - rect.top - rect.height / 2;

      const svgDx = x * (oldScale - this.scale);
      const svgDy = y * (oldScale - this.scale);

      this.moveX += svgDx;
      this.moveY += svgDy;

      this.updateTransform();

      event.preventDefault();
    }
  }


  onPan(event: HammerInput) {
    this.deltaX = event.deltaX;
    this.deltaY = event.deltaY;

    // if (-this.MAX_X < this.deltaX && this.deltaX < this.MAX_X) {
      this.updateTransform();
    // }

    this.isPanning = true;
    this.isTintVisible = false;
  }

  onPanEnd(event: HammerInput) {
    this.moveX += this.deltaX;
    this.moveY += this.deltaY;
    this.moveX = Math.max(-this.MAX_X, Math.min(this.MAX_X, this.moveX));
    this.moveY = Math.max(-this.MAX_Y, Math.min(this.MAX_Y, this.moveY));
    this.deltaX = 0;
    this.deltaY = 0;

    // if (-this.MAX_X < this.deltaX && this.deltaX < this.MAX_X) {
      this.updateTransform();
    // }

    setTimeout(() => {
      this.isPanning = false;
    });
  }





  private updateTransform() {
    const x = Math.max(
      -this.MAX_X,
      Math.min(this.MAX_X, this.moveX + this.deltaX),
    );
    const y = Math.max(
      -this.MAX_Y,
      Math.min(this.MAX_Y, this.moveY + this.deltaY),
    );
    this.svgTransform = this.domSanitizer.bypassSecurityTrustStyle(
      `scale(${this.scale}) translate(${x}px, ${y}px)`
    );
  }

}
