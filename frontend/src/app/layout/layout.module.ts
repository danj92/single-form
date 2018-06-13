import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { LandingPageModule } from 'app/landing-page';


import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
    declarations: [
        FooterComponent,
        NavigationComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        LandingPageModule,
    ],
    exports: [
        FooterComponent,
        NavigationComponent,
    ]
})
export class LayoutModule { }
