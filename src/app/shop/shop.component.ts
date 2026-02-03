import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { articlesDb } from '../services/articles-db';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

  articles = articlesDb;

  constructor(private router: Router) { }

  viewProductDetail(slug: string) {
    this.router.navigate(['/shop/details', slug]);
    // Logic to view product details
  }

  getFirstVariantPrice(article: any): number {
    const firstVariantKey = Object.keys(article.variant)[0];
    return article.variant[firstVariantKey][0].price;
  }

  getPriceMin(article: any): number {
    let prices: number[] = [];

    for (const key in article) {
      if (article.hasOwnProperty(key)) {
        article[key].forEach((item: any) => {
          if (prices.includes(item.price)) return;
          prices.push(item.price);
        });
      }
    }

    if (prices.length > 1) {
      article.morePricesExist = true;
    } else {
      article.morePricesExist = false;
    }

    return Math.min(...prices);
  }
}
