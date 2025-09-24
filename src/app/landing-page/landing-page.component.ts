import { Component } from '@angular/core';
import { ServicesComponent } from "./services/services.component";
import { HEROComponent } from "./hero/hero.component";
import { GreetingComponent } from "./greeting/greeting.component";
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ServicesComponent, HEROComponent, GreetingComponent, MatButtonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {


}
