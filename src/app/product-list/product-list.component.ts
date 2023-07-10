import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[] | undefined;
  dummyArray: Product[] | undefined;
searchType !: string;
  constructor(private authService : AuthService, private router: Router){}

  ngOnInit(): void {
   this.getAllProducts();
  }

  getAllProducts()
  {
    this.authService.getAllProducts().subscribe(
      data=>{
        this.products = data;
        this.dummyArray = data;
      }
    );
  }

  disableProduct(id: number,product: Product)
  {
    this.authService.disableProductById(id,product).subscribe(
      data=>
      {
        console.log(data);
        window.location.reload();
      }
    );
  }

  updateProduct(id: number)
  {
    this.router.navigate(['updateProduct',id]);
  }

  viewProduct(id: number)
  {
    this.router.navigate(['viewProduct',id]);
  }

  addProduct()
  {
    this.router.navigate(['addProduct']);
  }

  search()
  {
    this.products=this.dummyArray;
    if(this.searchType.length == 0) {
      this.getAllProducts();
   
    }

    
      this.products = this.products?.filter(c => { 
      
        return c.productType.toString().toLowerCase().includes(this.searchType.toLowerCase());
      })  
    
  }
}
