import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  product !: Product;
  id !: number;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.authService.getProductById(this.id).subscribe(data=>
     {this.product=data;});
  }

  list()
  {
    this.router.navigate(['productList']);
  }
}
