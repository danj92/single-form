import { Routes } from '@angular/router';
import { LandingPageComponent } from '../app/landing-page/landing-page/landing-page.component';

export const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LandingPageComponent,
      },
];
