import { Component } from '@angular/core';
import { ServicesComponent } from "./services/services.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ServicesComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
