import { AfterViewInit, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServiceService } from '../services/category-service.service';
import AOS from 'aos'
import { Meta, Title } from '@angular/platform-browser';
import { seoDetail, getSeoBySlug } from './../../seoDetail';
import { isPlatformBrowser } from '@angular/common';

type SeoKey = keyof typeof seoDetail;

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements AfterViewInit, OnInit {
  categoryService = inject(CategoryServiceService)
  router = inject(Router)
  product!: any;
  currentlyProduct!: any;
  platformId = inject(PLATFORM_ID)

  constructor(private route: ActivatedRoute, private title: Title, private meta: Meta) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params => {
      const link = params['id'];

      if (getSeoBySlug(link)) {
        let key = this.getSeoKeyBySlug(link)
        this.product = key
      }

      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 0, behavior: "instant" });
      }

      this.currentlyProduct = this.getDetail(this.product);
    }))
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init()
    }

    this.getSeoCategorie(this.product)
    this.showName()
  }

  getSeoKeyBySlug(slug: string): SeoKey | undefined {
    const keys = Object.keys(seoDetail) as SeoKey[];
    let url = "/" + slug
    let key = keys.find(key => seoDetail[key].slug === url);
    return key
  }

  getSeoCategorie(id: keyof CategoryServiceService["seoDetail"]) {
    const seo = this.categoryService.seoDetail[id]
    this.title.setTitle(seo.title)
    this.meta.updateTag({
      name: 'description',
      content: seo.content
    })
  }

  showName() {
    const id: keyof CategoryServiceService["seoDetail"] = this.product;
    const seo = this.categoryService.seoDetail[id]
    return seo.name
  }



  getDetail(id: keyof CategoryServiceService["detail"]) {
    return this.currentlyProduct = this.categoryService.detail[id]
  }

  back() {
    // this.location.back()
    this.router.navigateByUrl('#product')
  }
}
