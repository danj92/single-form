import { Routes } from '@angular/router';

import { PlaygroundComponent } from '../playground/playground/playground.component';
import { ResultComponent } from '../landing-page/result/result.component';
import { LandingPageComponent } from '../landing-page/landing-page/landing-page.component';

export const landingPageRoutes: Routes = [
    {
        path: 'playground',
        component: PlaygroundComponent,
    },
    {
        path: 'result',
        component: ResultComponent,
    },

];
