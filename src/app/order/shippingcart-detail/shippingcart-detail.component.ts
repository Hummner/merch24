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
import { FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatRadioModule } from '@angular/material/radio';



@Component({
  selector: 'app-shippingcart-detail',
  standalone: true,
  imports: [MatRadioModule, MatStepper, MatStep, MatStepLabel, MatStepperModule, MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatIconModule, CommonModule],
  templateUrl: './shippingcart-detail.component.html',
  styleUrl: './shippingcart-detail.component.scss'
})
export class ShippingcartDetailComponent implements OnInit {

  shippingcart = inject(ShippingcartServiceService);
  cart!: CartItems[];
  sumPrice!: number;
  private shippingcartService = inject(ShippingcartServiceService);
  private _formBuilder = inject(FormBuilder);
  showDifferentBillingAddress = false;

  shipments: string[] = ['Lieferung', 'Abholung'];
  payments: string[] = ['Überweisung', 'Barzahlung'];


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
    })
  }

  get shippingCost(): number {
    if (this.shipmentControl.value != "" && this.shipmentControl.value == this.shipments[this.shipments.indexOf("Lieferung")]) {
      return this.shippingcart.shippingCost
    }
    return 0
  }

  get totalPrice(): number {
    return this.shippingCost + this.sumPrice;
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

  paymentControl = new FormControl("", Validators.required);
  shipmentControl = new FormControl("", Validators.required);

  deleteItemFromCart(item: CartItems) {
    this.shippingcartService.delelteItem(item);
  }

  toOverview() {
    console.log(this.firstFormGroup.status,
    this.paymentControl.status,
    this.shipmentControl.status,
  this.secondFormGroup.status);

    if (!this.checkForms()) return

    alert("Danke für deine Bestellung")

  }

  checkForms() {
    this.firstFormGroup.markAllAsTouched();
    this.paymentControl.markAllAsTouched();
    this.shipmentControl.markAllAsTouched();

    if (this.showDifferentBillingAddress) {
      this.secondFormGroup.markAllAsTouched();
      if (this.checkFormsWithBillingAddress()) return true
      return false
    }
    if (this.checkFormsWithoutBillingAddress()) return true
    return false
  }

  checkFormsWithoutBillingAddress() {
    return this.firstFormGroup.valid && this.paymentControl.valid && this.shipmentControl.valid
  }

  checkFormsWithBillingAddress() {
    return this.firstFormGroup.valid && this.paymentControl.valid && this.shipmentControl.valid && this.secondFormGroup.valid
  }

}
