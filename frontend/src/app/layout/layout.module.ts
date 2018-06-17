import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { LandingPageModule } from 'app/landing-page';


import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';

import { layoutRoutes } from './layout.routing';

@NgModule({
    declarations: [
        FooterComponent,
        NavigationComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(layoutRoutes),
        LandingPageModule,
    ],
    exports: [
        FooterComponent,
        NavigationComponent,
    ]
})
export class LayoutModule { }
