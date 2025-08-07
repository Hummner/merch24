import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ImpressumComponent } from './impressum/impressum.component';

export const routes: Routes = [
    {path: "", component: LandingPageComponent},
    {path: "impressum", component: ImpressumComponent}
];
