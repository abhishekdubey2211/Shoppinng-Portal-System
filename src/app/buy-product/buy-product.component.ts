import { Component } from '@angular/core';
import { Product } from '../product';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetails } from '../order-details';
import { User } from '../user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent {

  product !: Product;
  id !: number;
  orderDetails : OrderDetails = new OrderDetails();
  

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.authService.getProductById(this.id).subscribe(data=>
     {this.product=data;});
  }

  pay: string = 'COD';
  onSubmit()
  {
  //  if(this.orderDetails.paymentMode.match(this.pay))
  //  {
    this.orderDetails.paymentMode='COD';
    this.authService.placeOrder(this.id,this.orderDetails.user.id, this.orderDetails).subscribe(
      data=>
      {
        console.log('Order Placed Successfully', data);
        alert("Your order has been placed!!");
        this.router.navigate(['order']);
      }
    );
   }
  //  else
  //  {
  //   alert("Only COD is available");
  //   window.location.reload();
  //  }
 // }

 form = new FormGroup(
  {
    name:new FormControl("",[Validators.required]),
    userid: new FormControl("",[Validators.required,Validators.minLength(1),Validators.min(1)]),
    quantity: new FormControl("",[Validators.required,Validators.minLength(1),Validators.min(1)]),
    pmode : new FormControl("",[Validators.required])
  }
);

get f()
{
  return this.form.controls;
}
}
