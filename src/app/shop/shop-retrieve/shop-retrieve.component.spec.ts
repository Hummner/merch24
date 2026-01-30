import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopRetrieveComponent } from './shop-retrieve.component';

describe('ShopRetrieveComponent', () => {
  let component: ShopRetrieveComponent;
  let fixture: ComponentFixture<ShopRetrieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopRetrieveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
