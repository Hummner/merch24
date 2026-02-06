import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { articlesDb } from '../services/articles-db';
import { ArticleVariant } from '../interfaces/article-variant';
import { Article } from '../interfaces/article';


interface FoodNode {
  name: string;
  children?: FoodNode[];
}




@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent implements OnInit {

  articles = articlesDb;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  viewProductDetail(slug: string) {
    this.router.navigate(['/shop/details', slug]);
    // Logic to view product details
  }

  getFirstColorImage(article: Article): string {
    const variantKeys = Object.keys(article.colors);
    const firstImage = article.colors[variantKeys[0]]!.images[0];
    return firstImage ? firstImage : "assets/img/coming.jpg"
  }

  getLowestPrice(article: Article): number {
    let prices: number[] = [];
    const colors = Object.keys(article.colors);

    colors.forEach((color: string) => {
      article.colors[color]!.variants.forEach((variant: ArticleVariant) => {

        if (prices.includes(variant.price)) return
        prices.push(variant.price)
      })
    })

    return Math.min(...prices);
  }

  getMorePriceText(article: Article) {
    if (!article.morePricesExist) return
    return article.morePricesExist ? 'ab' : ''
  }
}