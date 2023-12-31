import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderComponent } from './order/order.component';
import { ProductUserComponent } from './product-user/product-user.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { ReddirectproductsComponent } from './reddirectproducts/reddirectproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ProductListComponent,
    RegisterUserComponent,
    AddProductComponent,
    UpdateProductComponent,
    ProductDetailsComponent,
    OrderComponent,
    ProductUserComponent,
    CartItemsComponent,
    BuyProductComponent,
    ReddirectproductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
