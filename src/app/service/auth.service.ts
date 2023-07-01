import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { User } from '../user';
import { OrderDetails } from '../order-details';

const baseUrl = 'http://localhost:8080/';
const userUrl = 'http://localhost:8080/user/';
const disableProduct = 'http://localhost:8080/cancelProduct';
const updateProd = 'http://localhost:8080/updateProduct';
const update = 'http://localhost:8080';
const orders = 'http://localhost:8080/';
//const addProd = 'http://localhost:8080/admin/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]>
  {
      return this.http.get<Product[]>(baseUrl+"products");
  }

  getAllOrders(): Observable<OrderDetails[]>
  {
      return this.http.get<OrderDetails[]>(orders+"getAllOrders");
  }

  registerUser(user: User): Observable<User>
  {
    return this.http.post<User>(userUrl+'register',user);
  }

  disableProductById(id: number, product: Product): Observable<Object>
  {
    return this.http.put<any>(`${disableProduct}/${id}`,product);
  }

  addProduct(product: Product): Observable<Object>
  {
    return this.http.post<any>(baseUrl+'addProduct',product);
  }

  updateProduct(id: number, product: Product): Observable<Object>
  {
    return this.http.put(`${updateProd}/${id}`,product);
  }

  getProductById(id: number): Observable<Product>
  {
    return this.http.get<Product>(`${update}/${id}`);
  }
}
