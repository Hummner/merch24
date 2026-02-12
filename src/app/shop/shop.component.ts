import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { articlesDb } from '../services/articles-db';
import { ArticleVariant } from '../interfaces/article-variant';
import { Article } from '../interfaces/article';
import { ArticleColors } from '../interfaces/article-colors';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../services/db.service';
import slugify from 'slugify';


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
export class ShopComponent implements OnInit, OnDestroy {

  articles!: Article[]
  category!: string | null;
  subcategory!: string | null;
  productcategory!: string | null

  db = inject(DbService)
  categoryId!: number | undefined


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.category = this.route.snapshot.paramMap.get('category');
    this.subcategory = this.route.snapshot.paramMap.get('subcategory');
    this.productcategory = this.route.snapshot.paramMap.get('productcategory');

    this.route.url.subscribe(segment => {
      const categories = segment.map(s => s.path)
      if (categories.length == 0) return 
      this.getCategoryPath(categories);
    })

    this.loadProducts()


  }

  ngOnDestroy(): void {
    this.db.destroySubProduct()
  }

  loadProducts() {
    this.db.filterdProducts$.subscribe((items) => {
      this.articles = items
    })
  }

  getCategoryPath(categories: string[]) {
    const path = categories.join("/")
    if (path == "shop") return this.db.getFirstPageProducts()
    return this.db.getProductsFromCategory(path)
  }

  getFirstPage() {
    
  }

  matchSlug(name: string, target: string) {
    return target && slugify(name.toLowerCase()) === target
  }

  viewProductDetail(slug: string) {
    this.router.navigate(['/shop/details', slug]);
    // Logic to view product details
  }

  getFirstColorImage(article: Article): string {
    const variantKeys = Object.keys(article.colors);
    const artcileColors: ArticleColors = article.colors[variantKeys[0]]!;
    if (artcileColors) {
      const imageArray: {
        alt: string;
        id: number;
        image: string;
    }[] = artcileColors.images;
      return imageArray[0].image
    }
    return "assets/img/coming.jpg"
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