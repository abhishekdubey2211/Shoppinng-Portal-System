import { Component } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-reddirectproducts',
  templateUrl: './reddirectproducts.component.html',
  styleUrls: ['./reddirectproducts.component.css']
})
export class ReddirectproductsComponent {
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
    this.router.navigate(['prodUser']);
  }

}
