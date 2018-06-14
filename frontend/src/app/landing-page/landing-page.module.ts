import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiModule } from 'app/ui';
import { ArtFormsModule } from 'app/forms';

import { LandingPageComponent } from './landing-page/landing-page.component';


import { landingPageRoutes } from './landing-page.routing';
import { ResultComponent } from './result/result.component';


@NgModule({
    imports: [
        BrowserModule,
        UiModule,
        ArtFormsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(landingPageRoutes),
    ],
    declarations: [
        LandingPageComponent,
        ResultComponent,
    ],
    exports: [
        LandingPageComponent,
    ],
})

export class LandingPageModule { }
