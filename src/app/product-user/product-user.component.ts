import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-user',
  templateUrl: './product-user.component.html',
  styleUrls: ['./product-user.component.css']
})
export class ProductUserComponent {

  products: Product[] | undefined;

  constructor(private authService : AuthService, private router: Router){}

  ngOnInit(): void {
    this.authService.getAllProducts().subscribe(
      data=>{
        this.products = data;
      }
    );
  }

  viewProduct(id: number)
  {
    this.router.navigate(['reProd',id]);
  }

  buy(id: number)
    {
      this.router.navigate(['buy',id]);
    }
}
