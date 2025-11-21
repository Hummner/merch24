import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServiceService } from '../services/category-service.service';
import { Location } from '@angular/common';
import AOS from 'aos'
import { Meta, Title } from '@angular/platform-browser';
import { seoDetail, getSeoBySlug } from './../../seoDetail';

type SeoKey = keyof typeof seoDetail;

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements AfterViewInit {
  categoryService = inject(CategoryServiceService)
  router = inject(Router)
  product!: any;
  currentlyProduct!: any;

  constructor(private route: ActivatedRoute, private location: Location, private title: Title, private meta: Meta) {
    this.route.params.subscribe((params => {
      const link = params['id'];

      if (getSeoBySlug(link)) {
        let key = this.getSeoKeyBySlug(link)
        this.product = key
        console.log(key);
        
      }



      window.scrollTo({ top: 0, behavior: "instant" });
      this.currentlyProduct = this.getDeatail(this.product);
      console.log(this.currentlyProduct);
    }))
  }

  ngAfterViewInit(): void {
    AOS.init()
    console.log(this.product);

    this.getSeoCategorie(this.product)
    this.showName()


  }

  getSeoKeyBySlug(slug: string): SeoKey | undefined {
    const keys = Object.keys(seoDetail) as SeoKey[];
    console.log(keys);
    
    return keys.find(
      key => seoDetail[key].slug === slug
    );
  }

  getSeoCategorie(id: keyof CategoryServiceService["seoDetail"]) {
    const seo = this.categoryService.seoDetail[id]
    this.title.setTitle(seo.title)
    this.meta.updateTag({
      name: 'descripton',
      content: seo.title
    })

  }

  showName() {
    const id: keyof CategoryServiceService["seoDetail"] = this.product;
    const seo = this.categoryService.seoDetail[id]
    return seo.name
  }



  getDeatail(id: keyof CategoryServiceService["detail"]) {
    return this.currentlyProduct = this.categoryService.detail[id]
  }

  back() {
    // this.location.back()
    this.router.navigateByUrl('#product')
  }
}
