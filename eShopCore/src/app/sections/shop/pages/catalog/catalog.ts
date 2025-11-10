import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { ShoppingApi } from '../../../../core/services/shopping-api';
import { FrontEndApi } from '../../../../core/services/front-end-api';
import { Navbar } from '../../components/shop-navbar/shop-navbar';
import { ButtonModule } from 'primeng/button';
import { CardProductSquare } from '../../components/card-product-square/card-product-square';
import { SidebarCart } from '../../components/sidebar-cart/sidebar-cart';
import { NgClass } from '@angular/common';


@Component({
  selector: 'shop-catalog',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    ButtonModule,
    CardProductSquare,
    SidebarCart,
    Navbar,
    NgClass
],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog implements OnInit{
// SERVICES
  shop_service = inject(ShoppingApi);
  frontEnd_service = inject(FrontEndApi);
// VARIABLES
  
  ngOnInit(): void {
    // this.shop_service.getItemsInCart();
  }


}
