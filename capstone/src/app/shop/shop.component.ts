import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products:Array <Product>;
  pgroups: Array <any>;
  oneProduct:Product;
  flag:boolean;
  single:boolean;

  

  constructor(public productService:ProductService) { 
    this.products = new Array<Product>();
    this.pgroups = new Array();
    this.single=false;
    //this.flag=false;
  
  }

  ngOnInit(): void {
 
  }

  loadProducts():void{
    this.productService.getAllProducts().subscribe(data=>this.products=data);
    let i = 0;
    for ( i=0;i<(this.products.length/3);i++)
    {
      this.pgroups[i]=[this.products[i*3],this.products[(i*3)+1],this.products[(i*3)+2]];
    }
    this.flag=true;
  }
  openElement(p:Product){
    this.single = true;
    this.oneProduct =p;
    window.scrollTo(0, 300);
  }
  



}
