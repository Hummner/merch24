import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';

export const routes: Routes = [
    {
        path: "",
        component: LandingPageComponent,
        data: {
            title: "Merch24 | Full-Service-Agentur für Merchandise & Branding",
            description: "Individuelle Fanartikel für Fußball, Eishokey und mehr. Schnelle Produktion, starke Qualität, fairer Preis."
        }
    },
    {
        path: "impressum",
        component: ImpressumComponent,
        data: {
            title: "Impressum | Merch24",
            description: "Rechtliche Informationen und Kontaktangaben zu unserem Unternehmen."
        }
    },
    {
        path: "product/:id",
        component: ProductComponent,
        data: {
            title: "Produktdetails | Merch24",
            description: "Erfahre mehr über Materialien und besondere Merkmale deines Fanartikels."
        }
    },
    {
        path: "contact",
        component: ContactComponent,
        data: {
            title: "Kontakt | Merch24",
            description: "Fragen zu Fanartikeln oder Großbestellungen? Schreib uns einfach."
        }
    },
    {
        path: "privacy-policy",
        component: PrivacyPolicyComponent,
        data: {
            title: "Datenschutzerklärung | Merch24",
            description: "So schützen wir deine Daten transparent und gesetzeskonform."
        }
    },
    {
        path: "withdrawal",
        component: WithdrawalComponent,
        data: {
            title: "Widerrufsrecht | Merch24",
            description: "Informationen zum Widerruf, Rücksendung und Erstattung."
        }
    }
];

