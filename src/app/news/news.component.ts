import { Component, inject } from '@angular/core';
import { NewsServiceService } from '../services/news-service.service';
import { ServiceComponent } from '../landing-page/services/service/service.component';

import { NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NgbCarousel, NgbSlide],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  activeIndex: number | null = null;
  leavingIndex: number | null = null;
  newsService = inject(NewsServiceService)
  categories = this.newsService.categories

  images = [
    "assets/img/sticker.jpg",
    "assets/img/cups.jpg",
    "assets/img/photogift.jpg",
  ]
  

  onEnter(index: number) {
    this.leavingIndex = null;
    this.activeIndex = index;
  }

  onLeave(index: number) {
    this.activeIndex = null;
    this.leavingIndex = index;

    setTimeout(() => {
      if (this.leavingIndex === index) {
        this.leavingIndex = null;
      }
    }, 1000); // Dauer der CSS-Animation
  }



}
