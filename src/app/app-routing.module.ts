import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderComponent } from './order/order.component';
import { ProductUserComponent } from './product-user/product-user.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { ReddirectproductsComponent } from './reddirectproducts/reddirectproducts.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'productList', component:ProductListComponent},
  {path:'register', component:RegisterUserComponent},
  {path:'addProduct', component:AddProductComponent},
  {path:'updateProduct/:id', component:UpdateProductComponent},
  {path:'viewProduct/:id', component:ProductDetailsComponent},
  {path:'order', component:OrderComponent},
  {path:'prodUser', component:ProductUserComponent},
  {path:'reProd/:id', component:ReddirectproductsComponent},
  {path:'buy/:id', component:BuyProductComponent},
  {path:'', redirectTo:'home', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
