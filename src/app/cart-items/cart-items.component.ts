import { Component } from '@angular/core';
import { CartItem } from '../cart-item';
import { Product } from '../product';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent {
  products !: Product[];
  cartItem : CartItem = new CartItem();
}
