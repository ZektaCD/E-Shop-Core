import { Component } from '@angular/core';
import { Navbar } from '../../components/shop-navbar/shop-navbar';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    Navbar
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

}
