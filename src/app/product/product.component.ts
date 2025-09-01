import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  product!: string

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params => this.product = params['id']))
    window.scrollTo({ top: 0, behavior: "instant" })
  }
}
