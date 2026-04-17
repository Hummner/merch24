import { Component, inject, OnInit, ViewChild } from '@angular/core';
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
import { Router } from '@angular/router';



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
  formsValid = false

  @ViewChild(MatStepper) stepperComp!: MatStepper



  shipments: string[] = ['Lieferung', 'Abholung'];
  payments: string[] = ['Überweisung', 'Barzahlung'];


  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router
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

  addressFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    business: [''],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    address: ['', Validators.required],
    zip: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
    city: ['', Validators.required],
  });

  billingAddressFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    business: [''],
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

  // nextStep() {
  //   console.log(this.stepperComp._steps.get(0));
  //   console.log(this.stepperComp.selectedIndex)

  //   this.stepperComp.selected!.completed = true
  //   this.stepperComp.next()
  // }

  // previousStep() {
  //   this.stepperComp.previous()
  // }

  // isEditable() {
  //   const stepperIndex = this.stepperComp.selectedIndex;

  //   const previousStepInex = this.stepperComp._steps.get(stepperIndex - 1)

  // }

  toOverview() {
    this.markFormAsTouched();
    if (!this.checkForms()) return this.goToForm()
    this.saveFormInSessionStorage();
  }

  saveFormInSessionStorage() {
    if (!this.showDifferentBillingAddress) {
      this.renderBillingAddress()
    }
    const customerDetails = {
      "address": this.addressFormGroup.value,
      "billingAddress": this.billingAddressFormGroup.value,
      "payment": this.paymentControl.value,
      "shipment": this.shipmentControl.value
    }

    sessionStorage.setItem("customerDetails", JSON.stringify(customerDetails))

    this.router.navigateByUrl('order/overview')
  }

  renderBillingAddress() {
    this.billingAddressFormGroup.setValue({
      firstName: this.addressFormGroup.value.firstName!,
      lastName: this.addressFormGroup.value.lastName!,
      business: this.addressFormGroup.value.business!,
      email: this.addressFormGroup.value.email!,
      address: this.addressFormGroup.value.address!,
      zip: this.addressFormGroup.value.zip!,
      city: this.addressFormGroup.value.city!,
    })
  }

  goToForm() {
    if (this.stepperComp.selectedIndex == 0) {
      this.stepperComp.next()
    }
  }

  markFormAsTouched() {
    this.addressFormGroup.markAllAsTouched();
    this.paymentControl.markAllAsTouched();
    this.shipmentControl.markAllAsTouched();

    if (this.showDifferentBillingAddress) {
      this.billingAddressFormGroup.markAllAsTouched();
    }

  }

  checkForms(): boolean {
    if (this.showDifferentBillingAddress) {
      if (this.checkFormsWithBillingAddress()) return true
      return false
    }
    if (this.checkFormsWithoutBillingAddress()) return true
    return false
  }

  checkFormsWithoutBillingAddress() {
    return this.addressFormGroup.valid && this.paymentControl.valid && this.shipmentControl.valid
  }

  checkFormsWithBillingAddress() {
    return this.addressFormGroup.valid && this.paymentControl.valid && this.shipmentControl.valid && this.billingAddressFormGroup.valid
  }



}
