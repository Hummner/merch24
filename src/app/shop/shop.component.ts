import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

  constructor(private router: Router) {}

  viewProductDetail() {
    this.router.navigate(['/product', 1]);
    // Logic to view product details
  }

}
