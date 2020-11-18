import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClient:HttpClient) { } 

  getAllProducts():Observable<Product[]>{
   return this.httpClient.get<Product[]>("http://localhost:9090/products/allpro");
  }

   addProduct(userRef): Observable<any>{  
    return this.httpClient.post("http://localhost:9090/products/add",userRef);
   }
   updateProduct(userRef): Observable<any>{  
    return this.httpClient.post("http://localhost:9090/products/update",userRef);
   }
   deleteProduct(userRef): Observable<any>{  
    return this.httpClient.post("http://localhost:9090/products/del",userRef);
   }
}
