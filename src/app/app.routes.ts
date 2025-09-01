import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    {path: "", component: LandingPageComponent},
    {path: "impressum", component: ImpressumComponent},
    { path: "product/:id", component: ProductComponent },
    { path: "contact", component: ContactComponent},
    { path: "privacy-policy", component: PrivacyPolicyComponent}
    
];
