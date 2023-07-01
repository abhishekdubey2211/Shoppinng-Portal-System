import { Component } from '@angular/core';
import { Product } from '../product';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent{

  product: Product = new Product();

  constructor(private authService: AuthService, private router: Router){}

form = new FormGroup(
  {
    type: new FormControl("",[Validators.required,Validators.minLength(3)]),
    name: new FormControl("",[Validators.required,Validators.minLength(3)]),
    stock: new FormControl("",[Validators.required,Validators.minLength(1),Validators.min(10)]),
    price: new FormControl("",[Validators.required,Validators.minLength(2),Validators.min(500)])

  }
);

get f()
{
  return this.form.controls;
}

onSubmit()
{
  this.authService.addProduct(this.product).subscribe(
    data=>
    {
      console.log('SUCCESS', data);
      alert('Product added successfully.');
      this.router.navigate(['productList']);
    }
    ,
    err=>
    {
      console.log('FAILURE',err);
    }
  );
}
}
