import { Component, inject, input } from '@angular/core';
import { Product } from '../../../../core/models/product-type';
import { Navbar } from '../../components/shop-navbar/shop-navbar';
import { FrontEndApi } from '../../../../core/services/front-end-api';
import { ShoppingApi } from '../../../../core/services/shopping-api';
import { FormsModule } from '@angular/forms';
import { CartProduct } from '../../../../core/models/shoppi-type';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'shop-product-datails-page',
  standalone: true,
  imports: [Navbar, FormsModule, FontAwesomeModule],
  templateUrl: './product-datails-page.html',
  styleUrl: './product-datails-page.css',
})
export class ProductDatailsPage {
  frontEnd_service = inject(FrontEndApi);
  shop_service = inject(ShoppingApi);
  faminus = faMinus;
  faplus = faPlus;
  faHeart = faHeart;
  quantity = 1;
  size_selected = 6;

  addQ(): void {
    if (this.quantity <= this.shop_service.getOpenedProduct().stock) this.quantity += 1;
  }
  decreaseQ(): void {
    if (this.quantity > 1) this.quantity -= 1;
  }

  addToCart() {
    let cart_item: CartProduct = {
      item: this.shop_service.getOpenedProduct(),
      quantity: this.quantity,
      total_amount: this.shop_service.getOpenedProduct()!.price * this.quantity,
    };
    this.shop_service.addItemToCart(cart_item);
  }
}
