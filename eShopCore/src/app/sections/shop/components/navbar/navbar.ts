import { Component, inject } from '@angular/core';
import { ShopApi } from '../../../../core/services/shop-api';

@Component({
  selector: 'shop-navbar',
  standalone: true,
  imports: [
     
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  shop_service = inject(ShopApi);
  nav:any;
  logo!:string;

  ngOnInit(): void {
    this.nav = this.shop_service.getNavSections();
    this.logo = this.shop_service.getNavLogo();

  }

  // **/* 
}
