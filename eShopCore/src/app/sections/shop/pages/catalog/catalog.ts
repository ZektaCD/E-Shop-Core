import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { ShoppingApi } from '../../../../core/services/shopping-api';
import { Navbar } from '../../components/shop-navbar/shop-navbar';
import { ButtonModule } from 'primeng/button';
import { CardProductSquare } from '../../components/card-product-square/card-product-square';

@Component({
  selector: 'shop-catalog',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    ButtonModule,
    CardProductSquare,
    Navbar
  ],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog implements OnInit{
// SERVICES
  shop_service = inject(ShoppingApi);
// VARIABLES


  ngOnInit(): void {

  }


}
