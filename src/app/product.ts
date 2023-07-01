import { CartItem } from "./cart-item";

export class Product {
    
    id !: number;
    productType !: String;
    name !: String;
    stock !: number;
    price !: number;
    status !: String;

    cartItem !: CartItem[];
}
