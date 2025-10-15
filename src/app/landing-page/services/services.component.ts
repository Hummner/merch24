import { AfterViewInit, Component, inject } from '@angular/core';
import { ServiceComponent } from "./service/service.component";
import { CategoryServiceService } from '../../services/category-service.service';
import AOS from 'aos'
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements AfterViewInit {

  constructor(private title: Title, private meta: Meta) {

  }


  db = inject(CategoryServiceService);
  categories = this.db.categories

  ngAfterViewInit(): void {
    AOS.init()
    this.title.setTitle('Fanartikel, Teamwear & Workwear | Merch24');
    this.meta.updateTag({
      name: 'descripton',
      content: 'Wähle deine Kategorie und entdecke stylishe Fanartikel, Teamwear und Workwear für echte Sportfans und Teams.'
    }
    )
  }
}
