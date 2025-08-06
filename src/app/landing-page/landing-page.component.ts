import { Component } from '@angular/core';
import { ServicesComponent } from "./services/services.component";
import { HEROComponent } from "./hero/hero.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ServicesComponent, HEROComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
