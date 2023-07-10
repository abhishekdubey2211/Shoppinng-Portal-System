import { Component } from '@angular/core';
import { OrderDetails } from '../order-details';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  orders: OrderDetails[] | undefined;

  constructor(private authService : AuthService, private router: Router){}

  ngOnInit(): void {
    this.authService.getAllOrders().subscribe(
      data=>{
        this.orders = data;
      }
    );
  }

  cancelOrder(id: number, order: OrderDetails)
  {
    this.authService.cancelOrder(id, order).subscribe(
      data=>
      {
        console.log('Order cancelled',data);
        alert("Your order has been cancelled");
        window.location.reload();
      }
    );
  }
}
