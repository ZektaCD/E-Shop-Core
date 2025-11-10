import { Component, inject, input, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Product } from '../../../../core/models/product-type';
import { CartProduct } from '../../../../core/models/shoppi-type';
import { ShoppingApi } from '../../../../core/services/shopping-api';

@Component({
  selector: 'shop-card-product-square',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './card-product-square.html',
  styleUrl: './card-product-square.css'
})
export class CardProductSquare implements OnInit{

  shop_service = inject(ShoppingApi);
  stock = 10;
  quantity = 1;
  // item_card!: Product;
  data_card = input.required<Product>();
  
  ngOnInit(): void {
    this.stock != this.data_card()!.stock;
  }
  
  addQ():void{
    if(this.quantity <= this.stock) this.quantity += 1;
  }
  decreaseQ():void{
    if(this.quantity > 1)this.quantity-=1;
  }

  addToCart(){
    let cart_item: CartProduct = {
      item: this.data_card(),
      quantity: this.quantity,
      total_amount: this.data_card()!.price * this.quantity
    }
    this.shop_service.addItemToCart(cart_item);
  }

}
