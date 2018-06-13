import { Routes } from '@angular/router';

import { PlaygroundComponent } from './playground/playground.component';
import { PlaygroundButtonsComponent } from './playground-buttons/playground-buttons.component';
import { PlaygroundTypographyComponent } from './playground-typography/playground-typography.component';
import { PlaygroundFormsComponent } from './playground-forms/playground-forms.component';
import { PlaygroundColorsComponent } from './playground-colors/playground-colors.component';
import { PlaygroundRegionsMapComponent } from './playground-regions-map/playground-regions-map.component';


export const playgroundChildrenRoutes: Routes = [
    {
        path: 'buttons',
        component: PlaygroundButtonsComponent,
    }, {
        path: 'typography',
        component: PlaygroundTypographyComponent,
    }, {
        path: 'forms',
        component: PlaygroundFormsComponent,
    }, {
        path: 'colors',
        component: PlaygroundColorsComponent,
    }, {
        path: 'regions-map',
        component: PlaygroundRegionsMapComponent,
    }, {
        path: '',
        redirectTo: 'buttons',
        pathMatch: 'full',
    },
];
