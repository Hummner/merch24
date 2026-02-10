import { Component, HostListener, OnInit, TemplateRef, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { ViewportScroller } from '@angular/common';
import { CommonModule } from '@angular/common';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { ShippingcartServiceService } from '../../services/shippingcart-service.service';
import { CartItems } from '../../interfaces/cart-items';
import { MatBadgeModule } from '@angular/material/badge';
import { A11yModule } from "@angular/cdk/a11y";
import { categories } from '../../services/categories';
import slugify from '../../../../node_modules/slugify'
import { HttpClient } from '@angular/common/http';
import { Category } from '../../interfaces/category';
import { DbService } from '../../services/db.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, RouterLink, CommonModule, MatInputModule, MatBadgeModule, A11yModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',

})
export class HeaderComponent implements OnInit {
  viewPosition!: [number, number];
  headerOpacity = true;

  private offcanvasService = inject(NgbOffcanvas);
  private shippingcartService = inject(ShippingcartServiceService);
  private db = inject(DbService)
  cart: CartItems[] = [];
  totalPrice = this.totalCartPrice();
  categories!: Category[];
  subcategories = signal<Category[]>([])
  isSubCatOpen = false;
  hoverdCategory = signal<string>('')
  activeCategory = signal<Category | null>(null)
  isShop!: boolean



  constructor(private view: ViewportScroller, private router: Router, private http: HttpClient, private route: ActivatedRoute) {
    this.viewPosition = view.getScrollPosition()



  }


  @HostListener('window:scroll') // for window scroll events
  onScroll() {
    this.viewPosition = this.view.getScrollPosition();

    let sum = this.viewPosition.reduce((a, b) => a + b, 0)
    if (sum == 0) {
      this.headerOpacity = true;
    } else {
      this.headerOpacity = false
    }
  }

  totalCartPrice() {
    return this.cart.reduce((acc, item) => acc + (item.price * item.amount), 0);
  }

  getOpacity() {
    return this.headerOpacity ? 'opacity' : '-'
  }

  openCart(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }

  ngOnInit() {
    this.router.events.subscribe(() => {
      if (this.router.url.includes('/shop')) {
        return this.isShop = true;
      }
      return this.isShop = false;
    })




    this.shippingcartService.loadLocalStorageCart()
    this.shippingcartService.cart$.subscribe(items => {
      this.cart = items;
      this.totalPrice = this.totalCartPrice();
    });
    this.db.getCategoryFromDb()

    this.getDataFromDB()

  }


  getDataFromDB() {
    this.db.categories$.subscribe(data => {
      this.categories = data
    })


  }

  itemPrice(item: CartItems, value: number): number {
    console.log(item);

    const number = Number(value);
    item.total = number * item.price;
    console.log("Amount: ", number, " - Item price: ", item.price);


    return number * item.price;
  }

  deleteItemFromCart(item: CartItems) {
    this.shippingcartService.delelteItem(item);
  }


  goToCheckout(offcanvas: any) {
    offcanvas.close();
    // Navigate to checkout page
  }

  showSubcategrioes(category: Category) {
    this.subcategories.set(category.children)
    this.hoverdCategory.set(category.name)
    this.isSubCatOpen = true
  }

  hideSubcategrioes() {
    this.subcategories.set([])
    this.hoverdCategory.set('')
    this.isSubCatOpen = false
  }

  // navigateToSubcategory(subcategory: Category, productcategory: Category) {
  //   this.router.navigate(['/shop/category/', slugify(this.activeCategory()).toLowerCase(), slugify(subcategory.name).toLowerCase(), slugify(productcategory.name).toLowerCase()])
  // }


  navigateToSubcategory(subcategory?: Category, productcategory?: Category) {
    if (subcategory || productcategory) {
      debugger

      let subcategoryName;
      let productcategoryName;
      if (subcategory) {
        subcategoryName = slugify(subcategory.name).toLocaleLowerCase()
      }

      if (productcategory) {
        productcategoryName = slugify(productcategory.name).toLocaleLowerCase()
      }
      const array = new Array(subcategoryName, productcategoryName)

      const sublink = (array.join("/"))

      const link = "/shop/category/" + this.hoverdCategory() + "/" +  sublink

      this.router.navigate([link])
    }
  }

}

