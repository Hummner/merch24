import { Component, inject, OnInit } from '@angular/core';
import { ShippingcartServiceService } from '../../services/shippingcart-service.service';
import { Article } from '../../interfaces/article';
import { CartItems } from '../../interfaces/cart-items';
import { MatStepper, MatStep, MatStepLabel } from "@angular/material/stepper";
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-shippingcart-detail',
  standalone: true,
  imports: [MatStepper, MatStep, MatStepLabel, MatStepperModule, MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatIconModule, CommonModule],
  templateUrl: './shippingcart-detail.component.html',
  styleUrl: './shippingcart-detail.component.scss'
})
export class ShippingcartDetailComponent implements OnInit {

  shippingcart = inject(ShippingcartServiceService);
  cart!: CartItems[];
  sumPrice!: number;
  shippingCost!: number;
  totalPrice!: number;
  private shippingcartService = inject(ShippingcartServiceService);
  private _formBuilder = inject(FormBuilder);
  showDifferentBillingAddress  = false;



  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'create',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/create.svg')
    );
  }



  ngOnInit(): void {
    this.shippingcart.cart$.subscribe((items) => {
      this.cart = items;
      this.sumPrice = this.shippingcart.totalPrice;
      this.shippingCost = this.shippingcart.shippingCost;
      this.totalPrice = this.shippingCost + this.sumPrice;

    })
  }



  firstFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    address: ['', Validators.required],
    zip: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
    city: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    address: ['', Validators.required],
    zip: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
    city: ['', Validators.required],
  });

  deleteItemFromCart(item: CartItems) {
    this.shippingcartService.delelteItem(item);
  }

}
