import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { SharingService } from '../sharing.service';
import { User } from '../user.model';
import { UserService } from '../user.service';

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

 users:Array<User>;

 currentUser:User;

  constructor(public productService:ProductService,public userService:UserService,private sharingService:SharingService) { 
    this.products = new Array<Product>();
    this.users = new Array<User>();
    this.cart = new Array();
    //this.cart[0]=1;
    //this.cart.push(2);
    //this.cart.push(4);
    this.user = false;
    console.log("constructor")
    this.UpdateCart();
    this.total=0;
  }

  ngOnInit(): void {
   
   // this.loadProducts();
   //this.computeTotal();
    this.currentUser =this.sharingService.getDataU();
    if(this.currentUser!=undefined){
      this.cart = this.currentUser.cart;
      this.user=true;
    }

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
