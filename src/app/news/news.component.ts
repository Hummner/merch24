import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  activeIndex: number | null = null;
  leavingIndex: number | null = null;

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
