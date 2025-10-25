import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'shop-card-product-square',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './card-product-square.html',
  styleUrl: './card-product-square.css'
})
export class CardProductSquare {

  stock = 10;
  quantity = 1;

  addQ():void{
    if(this.quantity <= this.stock) this.quantity += 1;
  }
  decreaseQ():void{
    if(this.quantity > 1)this.quantity-=1;
  }

}
