import { Routes } from '@angular/router';

import { PlaygroundComponent } from './playground/playground.component';

import { playgroundChildrenRoutes } from './playground-children.routing';

export const playgroundRoutes: Routes = [
    {
        path: 'playground',
        component: PlaygroundComponent,
        children: playgroundChildrenRoutes,
    }
];
