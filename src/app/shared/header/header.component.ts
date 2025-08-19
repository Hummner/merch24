import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from "@angular/router";
import { ViewportScroller } from '@angular/common';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatMenuModule, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  viewPosition!: [number, number];
  headerOpacity = true;

  constructor(private view: ViewportScroller) {
    this.viewPosition = view.getScrollPosition()

  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    this.viewPosition = this.view.getScrollPosition();
    
    let sum = this.viewPosition.reduce((a, b) => a + b, 0)
    if (sum == 0) {
      this.headerOpacity = true;
    } else {
      this.headerOpacity = false
    }

    console.log(this.headerOpacity);
    
    
  } 

  getOpacity() {
    return this.headerOpacity ? 'opacity' : '-'
  }


}
