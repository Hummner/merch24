import { Component } from '@angular/core';
import { NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbCarousel, NgbSlide],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  images = [
    "assets/img/sticker.jpg",
    "assets/img/cups.jpg",
    "assets/img/photogift.jpg",
  ]

carousel = [
  {
    image: "assets/img/mannschaftssatz.jpg",
    title: "Jersey, Trikot",
    text: "Individuelle Jerseys, genau so wie du sie dir vorgestellt hast"
  },
  {
    image: "assets/img/teamwear.jpg",
    title: "Teamwear",
    text: "Hochwertige Teamwear für Training und Wettkampf – einheitlich, modern und bequem"
  },
  {
    image: "assets/img/cups.jpg",
    title: "Pokale & Medaillen",
    text: "Pokale und Medaillen für jeden Anlass – individuell gestaltet für besondere Erfolge"
  }
];



}
