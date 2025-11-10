import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { faCartArrowDown, faChevronRight, faClose, faMinus, faPlus, faTrash, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ShoppingApi } from '../../../../core/services/shopping-api';
import { FrontEndApi } from '../../../../core/services/front-end-api';
import { NgClass } from '@angular/common';
import { CartProduct } from '../../../../core/models/shoppi-type';
import { CartProductItem } from '../cart-product/cart-product';


@Component({
  selector: 'shop-sidebar-cart',
  standalone: true,
  imports: [
    CartProductItem,
    FontAwesomeModule,
    FormsModule,
    NgClass
],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  templateUrl: './sidebar-cart.html',
  styleUrl: './sidebar-cart.css'
})
export class SidebarCart {

  // ICONS
  fachevronright = faChevronRight;
  fatruck = faTruck;
  faclose = faClose;
  facartAD = faCartArrowDown;
  //VARIABLES
  shipping_data = "";
  // SERVICES 
  shop_service = inject(ShoppingApi);
  frontEnd_service = inject(FrontEndApi);

  closeSideBarCart(){
      this.frontEnd_service.setSidebarCartState(false);
  }

}
