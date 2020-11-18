import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { SharingService } from '../sharing.service';
import { User } from '../user.model';
import { UserService } from '../user.service';

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
  currentUser:User;

  constructor(public productService:ProductService,public userService:UserService,private sharingService:SharingService) { 
    this.products = new Array<Product>();
    this.pgroups = new Array();
    this.single=false;
    //this.flag=false;
  }

  ngOnInit(): void {
    this.currentUser =this.sharingService.getDataU();
    this.loadProducts();
    this.flag=false;
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
  result:string;
  addIt(){
    this.currentUser.cart.push(this.oneProduct.images);
    this.userService.updateUser(this.currentUser).subscribe(data=>this.result=data.msg);
  }


}
