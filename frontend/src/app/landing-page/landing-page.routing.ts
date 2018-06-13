import { Routes } from '@angular/router';

import { PlaygroundComponent } from '../playground/playground/playground.component';

export const landingPageRoutes: Routes = [
    {
        path: 'playground',
        component: PlaygroundComponent,
    },
];
