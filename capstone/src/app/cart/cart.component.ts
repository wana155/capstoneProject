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
 total:number;
 user:boolean;

  constructor(public productService:ProductService) { 
    this.products = new Array<Product>();
    this.cart = new Array();
    this.cart[0]=1;
    this.cart.push(2);
    this.cart.push(4);
    this.user = true;
    console.log("constructor")
    this.UpdateCart();
    this.total=0;
  }

  ngOnInit(): void {
    console.log("INIT")
   // this.loadProducts();
   //this.computeTotal();
  }

  computeTotal():void{
    for(let b of this.cart)
    {
      this.total = this.total+(b);
    }
  }

  UpdateCart():void{
    this.productService.getAllProducts().subscribe(data=>{
      this.products=data; 
      for(let b of this.cart)
      {
      this.total = this.total+(this,this.products[b-1].price);}
    });
  }

}
