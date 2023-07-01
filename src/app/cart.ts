import { CartItem } from "./cart-item";

export class Cart {

    cartId! : number;
    totalPrice !: number;

    cartItem !: CartItem[]; 
}
