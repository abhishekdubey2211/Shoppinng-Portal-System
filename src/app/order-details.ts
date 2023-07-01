import { Product } from "./product";
import { User } from "./user";

export class OrderDetails {

    orderId !: number;
    total !: number;
    quantity !: number;
    orderDate !: String;
    paymentMode !: String;
    status !: String;

    // product: Product = new Product();
    // user: User = new User();
}
