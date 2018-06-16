import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';

import { LandingPageModule } from 'app/landing-page';
import { LayoutModule } from 'app/layout';
import { ArtFormsModule } from 'app/forms';
import { PlaygroundModule } from 'app/playground';
import { SharedModule } from 'app/shared';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    LandingPageModule,
    LayoutModule,
    ArtFormsModule,
    PlaygroundModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
