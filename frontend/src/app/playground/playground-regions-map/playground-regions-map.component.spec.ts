import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundRegionsMapComponent } from './playground-regions-map.component';

describe('PlaygroundRegionsMapComponent', () => {
  let component: PlaygroundRegionsMapComponent;
  let fixture: ComponentFixture<PlaygroundRegionsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundRegionsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundRegionsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
