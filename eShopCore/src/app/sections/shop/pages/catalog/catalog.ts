import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Navbar } from '../../components/navbar/navbar';
import { ShopApi } from '../../../../core/services/shop-api';

@Component({
  selector: 'shop-catalog',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    ButtonModule,
    Navbar
  ],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog implements OnInit{
  
  shop_service = inject(ShopApi);
  
  ngOnInit(): void {
    
  }


}
