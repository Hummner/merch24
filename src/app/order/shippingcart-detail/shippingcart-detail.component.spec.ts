import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingcartDetailComponent } from './shippingcart-detail.component';

describe('ShippingcartDetailComponent', () => {
  let component: ShippingcartDetailComponent;
  let fixture: ComponentFixture<ShippingcartDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingcartDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShippingcartDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
