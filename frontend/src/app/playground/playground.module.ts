import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
    HttpClientModule,
  } from '@angular/common/http';

import { UiModule } from 'app/ui';
import { ArtFormsModule } from 'app/forms';

import { PlaygroundComponent } from './playground/playground.component';
import { PlaygroundButtonsComponent } from './playground-buttons/playground-buttons.component';

import { playgroundRoutes } from './playground.routing';
import { PlaygroundFormsComponent } from './playground-forms/playground-forms.component';
import { PlaygroundTypographyComponent } from './playground-typography/playground-typography.component';
import { PlaygroundColorsComponent } from './playground-colors/playground-colors.component';
import { PlaygroundRegionsMapComponent } from './playground-regions-map/playground-regions-map.component';


@NgModule({
    imports: [
        BrowserModule,
        UiModule,
        ArtFormsModule,
        RouterModule.forChild(playgroundRoutes),
        HttpClientModule,
    ],
    declarations: [
        PlaygroundComponent,
        PlaygroundButtonsComponent,
        PlaygroundFormsComponent,
        PlaygroundTypographyComponent,
        PlaygroundColorsComponent,
        PlaygroundRegionsMapComponent,
    ],
    entryComponents: [
        PlaygroundButtonsComponent,
    ],
    exports: [
        PlaygroundComponent,
        PlaygroundRegionsMapComponent,
    ],
})

export class PlaygroundModule { }
