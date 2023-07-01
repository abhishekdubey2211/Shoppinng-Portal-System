import { Cart } from "./cart";
import { Product } from "./product";

export class CartItem {

    id !: number;
    price !: number;
    quantity !: number;

    product !: Product;
    cart !: Cart;
}
