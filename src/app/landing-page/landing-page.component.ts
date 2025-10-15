import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from "./services/services.component";
import { HEROComponent } from "./hero/hero.component";
import { GreetingComponent } from "./greeting/greeting.component";
import {MatButtonModule} from '@angular/material/button';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ServicesComponent, HEROComponent, GreetingComponent, MatButtonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {

  }


  ngOnInit(): void {

    this.title.setTitle('Merch24 | Full-Service-Agentur für Merchandise & Branding in Essen');
    this.meta.updateTag({
      name: 'descripton',
      content: 'Individuelle Fanartikel für Fußball, Eishockey und mehr. Schnelle Produktion, starke Qualität, fairer Preis.'
    })
    
  }


}
