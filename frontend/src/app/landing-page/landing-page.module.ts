import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { UiModule } from 'app/ui';
import { ArtFormsModule } from 'app/forms';

import { LandingPageComponent } from './landing-page/landing-page.component';


import { landingPageRoutes } from './landing-page.routing';

@NgModule({
    imports: [
        BrowserModule,
        UiModule,
        ArtFormsModule,
        RouterModule.forRoot(landingPageRoutes),
    ],
    declarations: [
        LandingPageComponent,
    ],
    exports: [
        LandingPageComponent,
    ],
})

export class LandingPageModule { }
