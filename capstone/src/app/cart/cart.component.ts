import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 products:Array<Product>;
 cart:Array<number>;

 user:boolean;

  constructor(public productService:ProductService) { 
    this.products = new Array<Product>();
    this.cart = new Array();
     this.cart[0]=1;
    this.cart.push(1);
    this.cart.push(4);
    this.user = true;
    this.loadProducts();
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts():void{
    this.productService.getAllProducts().subscribe(data=>this.products=data);
  }

}
