import { Component, inject } from '@angular/core';
import { FrontEndApi } from '../../../../core/services/front-end-api';
import { ShoppingApi } from '../../../../core/services/shopping-api';

@Component({
  selector: 'shop-navbar',
  standalone: true,
  imports: [

  ],
  templateUrl: './shop-navbar.html',
  styleUrl: './shop-navbar.css'
})
export class Navbar {

  frontEnd_service = inject(FrontEndApi);
  shop_service = inject(ShoppingApi);
  nav:any;
  logo!:string;

  ngOnInit(): void {
    this.nav = this.frontEnd_service.getNavSections();
    this.logo = this.frontEnd_service.getNavLogo();
  }

  openSideBarCart(){
      this.frontEnd_service.setSidebarCartState(true);
  }

}
