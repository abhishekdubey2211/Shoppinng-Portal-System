import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{
  product: Product = new Product();
id!: number;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.authService.getProductById(this.id).subscribe(data=>
     {this.product=data;});
  }

  onSubmit()
  {
    this.authService.updateProduct(this.id,this.product).subscribe(
      data=>
      {
        console.log('SUCCESS', data);
        alert('Product updated successfully.');
        this.router.navigate(['productList']);
      }
    );
    }

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

}
