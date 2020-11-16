import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products:Array <Product>;

  constructor() { 
    this.products = new Array<Product>();
    //Temporary:
   var  product = new Product("100","Flex Pants",25,"Large"," - 56% Cotton, 44% Polyester -Imported - Drawstring closure - Machine Wash - A relaxed leg and elastic, drawstring waistband bring lounge-ready style to this classic casual pant - Elastic cuffs at ankle and on-seam side pockets -Everyday made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort ",55);
   this.products.push(product); 
   var  product = new Product("200","Shirt",12,"Small"," - 56% Cotton, 44% Polyester -Imported - Drawstring closure - Machine Wash - A relaxed leg and elastic, drawstring waistband bring lounge-ready style to this classic casual pant - Elastic cuffs at ankle and on-seam side pockets -Everyday made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort ",55);
   this.products.push(product); 
   
   //T
  }

  ngOnInit(): void {
  }

}
