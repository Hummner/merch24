import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { articlesDb } from '../services/articles-db';
import { ArticleVariant } from '../interfaces/article-variant';
import { Article } from '../interfaces/article';

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

  getFirstColorImage(article: Article): string {
    const firstVariantKey = Object.keys(article.colors);
    const firstImage = article.colors[firstVariantKey[0]].images[0];
    return firstImage ? firstImage : "assets/img/coming.jpg"
  }

  getLowestPrice(article: Article): number {
    let prices: number[] = [];
    const colors = Object.keys(article.colors);

    colors.forEach((color: string) => {
      article.colors[color].variants.forEach((variant: ArticleVariant) => {

        if (prices.includes(variant.price)) return
        prices.push(variant.price)
      })
    })

    if (prices.length > 1) {
      article.morePricesExist = true;
    } else {
      article.morePricesExist = false;
    }

    return Math.min(...prices);
  }
}
