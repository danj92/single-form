import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiModule } from 'app/ui';
import { ArtFormsModule } from 'app/forms';

import { LandingPageComponent } from './landing-page/landing-page.component';


import { landingPageRoutes } from './landing-page.routing';
import { ResultComponent } from './result/result.component';
import { ChildComponent } from './child/child.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { FormMixForageComponent } from './form-mix-forage/form-mix-forage.component';
import { FormMixForageNaturalComponent } from './form-mix-forage-natural/form-mix-forage-natural.component';
import { FormCompanyDataComponent } from './form-company-data/form-company-data.component';




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
        ChildComponent,
        SectionHeaderComponent,
        FormMixForageComponent,
        FormMixForageNaturalComponent,
        FormCompanyDataComponent,
    ],
    exports: [
        LandingPageComponent,
    ],
})

export class LandingPageModule { }
