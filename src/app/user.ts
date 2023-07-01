import { Address } from "./address";
import { Cart } from "./cart";

export class User {
    id !: number;
    name !: String;
    emailAddress !: String;
    password !: String;
    phone !: String;

    address: Address = new Address();
    cart : Cart = new Cart();
}
