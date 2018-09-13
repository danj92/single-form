import { Routes } from '@angular/router';

import { PlaygroundComponent } from '../playground/playground/playground.component';
import { ResultComponent } from '../landing-page/result/result.component';
import { LandingPageComponent } from '../landing-page/landing-page/landing-page.component';
import { FormCompanyDataComponent } from './form-company-data/form-company-data.component';

export const landingPageRoutes: Routes = [
    {
        path: 'playground',
        component: PlaygroundComponent,
    },
    {
        path: 'result',
        component: ResultComponent,
    },
    {
        path: 'company-data',
        component: FormCompanyDataComponent,
    },

];
