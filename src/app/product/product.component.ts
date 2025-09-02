import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { CategoryServiceService } from '../services/category-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  categoryService = inject(CategoryServiceService)
  router = inject(Router)
  product!: any;
  currentlyProduct!: any;

  constructor(private route: ActivatedRoute, private location: Location) {
    this.route.params.subscribe((params => {
      this.product = params['id'];
      window.scrollTo({ top: 0, behavior: "instant" });
      this.currentlyProduct = this.getDeatail(this.product);
      console.log(this.currentlyProduct);
      
    }))
    

    let link = this.product

    
    
    
  }

  getDeatail(id: keyof CategoryServiceService["detail"]) {
    return this.currentlyProduct = this.categoryService.detail[id]
  }

  back() {
    this.location.back()
  }
}
