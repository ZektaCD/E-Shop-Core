import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartProduct } from '../../../../core/models/shoppi-type';
import { ShoppingApi } from '../../../../core/services/shopping-api';

@Component({
  selector: 'shop-cart-product-item',
  imports: [
    FontAwesomeModule,
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  templateUrl: './cart-product.html',
  styleUrl: './cart-product.css'
})
export class CartProductItem implements OnInit{
  
  faminus = faMinus;
  faplus = faPlus;
  fatrash = faTrash;
  // SIGNALS
  data_item_cart = input.required<CartProduct>();
  position = input<number>(0);
  // SERVICES 
  shop_service = inject(ShoppingApi);
  q=0;
  price=0;
  total_amount = 0;
  stock:any;
  
  ngOnInit(): void {
    
  }

  addQuantity(){
    if(this.data_item_cart().quantity < this.data_item_cart().item.stock){
      this.data_item_cart().quantity++;
      this.data_item_cart().total_amount = this.data_item_cart().quantity*this.data_item_cart().item.price;
      this.shop_service.updateItemCart(this.position(), this.data_item_cart());
    }else{
      console.log('No se pueden sumar más items, limite de stock');
    }
  }

  decreaseQuantity(){
    if(this.data_item_cart().quantity > 1){
      this.data_item_cart().quantity--;
      this.data_item_cart().total_amount = this.data_item_cart().quantity*this.data_item_cart().item.price;
      this.shop_service.updateItemCart(this.position(), this.data_item_cart());
    }else{
      console.log('No se puede dejar en cero, apretar eliminar');
    }
  }

  deleteItem(){
    this.shop_service.deleteItemCart(this.position());
  }

}
