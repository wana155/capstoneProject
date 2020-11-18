import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { SharingService } from '../sharing.service';
import { ShopComponent } from '../shop/shop.component';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-in',
  templateUrl: './in.component.html',
  styleUrls: ['./in.component.css']
})
export class InComponent implements OnInit {
  loginEmail:string;
  loginPass:string;
  loginAdmin:string;
  inp:string;
  inpd:string;

  newF:string;
  newL:string;
  newE:string;
  newP:string;
  newPt:string;
findID:string;
foundH:boolean;
foundD:boolean;
   currentUser:User;
   in:boolean;

  userPortal:boolean;
  adminPortal:boolean;
  inform:boolean;
  selectionButtons:boolean;
  
  editUser:boolean;
  editProduct:boolean;
  users:Array<User>;
  products:Array <Product>;
  newProd:Product;


  constructor(public userService:UserService,private sharingService:SharingService,private productService:ProductService) {
  this.loadUsers();
  this.userPortal=false;
  this.adminPortal=false;
  this.inform=true;
  this.editUser=false;
  this.editProduct=false;
  this.selectionButtons=false;
  this.foundH=false;
  this.foundD=false;
  this.products = new Array<Product>();
  this.loadProducts();
   }

  ngOnInit(): void {
   

  }
  loadUsers(){
    this.userService.getAllUsers().subscribe(data=>{
      this.users=data; 
    });
  }
  loadProducts():void{
    this.productService.getAllProducts().subscribe(data=>this.products=data);
  }

  select(ent){
  this.inpd = ent;
  this.inp = ent;
  this.selectionButtons=true;
  } 
  selecto(ent){
    this.inp=this.inpd+ent;
    } 

  singIn():void{
    let found =false;
    for (let u of this.users){
      if (u.admin==this.loginAdmin&&u.email==this.loginEmail&&u.pasword==this.loginPass){
        found =true;
        this.currentUser=u;
        this.sharingService.setDataU(this.currentUser);
      }}
      if (found)
      {
        if(this.loginAdmin=="no"){
          this.userPortal=true;
          this.inform=false;
        }
        else{this.adminPortal=true;
          this.inform=false;}
      }
      else {alert("❌: Sing in unsuccessful, please try again!")}
  }
  result:any;
addUser(userRef){
  this.userService.addUser(userRef).subscribe(data=>this.result=data.msg);
}
addProduct(userRef){
  this.productService.addProduct(userRef).subscribe(data=>this.result=data.msg);
}

Ptitle:string;
Pprice:number;
Psize: string;
Pdescription:string;
Prating:number;
Pimages:number;
postP(){
  
  var prodc = new Product(this.products.length+1,this.Ptitle,this.Pprice,this.Psize,this.Pdescription,this.Prating,this.Pimages);
  this.addProduct(prodc);
    alert("Product Added");
    this.selectionButtons=false;
    this.inp=""; this.newProd=null; this.Ptitle="";this.Pprice=0;this.Psize="";this.Pdescription="";this.Prating=0;this.Pimages=0;
}
  register()
{ 
  if(this.newP==this.newPt){
    var adm="yes";
  if(this.inp=='UserAdd')
  { adm = "no";}
  let newUser = new User(this.users.length+1,this.newF,this.newL,this.newE,this.newP,adm,[]);
  this.addUser(newUser);
    alert("Account Added");
    this.selectionButtons=false;
    this.inp=""; this.newE ="";this.newF="";this.newL="";this.newP="";this.newPt="";adm="";
  }
  else{alert("❌: Registration unsuccessful, please try again!")}
}
findP(){
  let foun=false;
      for (let u of this.products){
        if (u._id===parseInt(this.findID)){
          this.newProd=u;
          foun=true;
        }
    }
     if(foun){
      this.foundH=true;
     }
     else{alert("Product record not found. Try again!")
    this.foundH=false;
    this.newProd=null;    
    }
  }
  
updUser:User;


find(){
let foun=false;
    for (let u of this.users){
      if (u._id===parseInt(this.findID)){
        this.updUser=u;
        foun=true;
      }
  }
   if(foun){
    this.foundH=true;
   }
   else{alert("User record not found. Try again!")
  this.foundH=false;
  this.updUser=null;    
  }
}
findoP(){
  let foun=false;
      for (let u of this.products){
        if (u._id===parseInt(this.findID)){
          this.newProd=u;
          foun=true;
        }
    }
     if(foun){
      this.foundD=true;
     }
     else{alert("Product record not found. Try again!")
    this.foundD=false;
    this.newProd=null;    
    }
  }

findo(){
  let foun=false;
      for (let u of this.users){
        if (u._id===parseInt(this.findID)){
          this.updUser=u;
          foun=true;
        }
    }
     if(foun){
      this.foundD=true;
     }
     else{alert("User record not found. Try again!")
    this.foundD=false;
    this.updUser=null;    
    }
  }

updateAcc(userRef){
  this.userService.updateAccount(userRef).subscribe(data=>this.result=data.msg);
}
updateProd(userRef){
  this.productService.updateProduct(userRef).subscribe(data=>this.result=data.msg);
}
updatePr(){
this.updateProd(this.newProd);
alert("Changes Completed");
this.foundH=false;
this.selectionButtons=false;
this.findID="";
this.inp="";
}
updateUs(){
   this.updateAcc(this.updUser);
   alert("Changes Completed");
   this.foundH=false;
   this.selectionButtons=false;
   this.findID="";
   this.inp="";
}
deleteRecord(userId){
  this.userService.deleteAccount(userId).subscribe(data=>this.result=data.msg);
}
deleteProduct(Id){
  this.productService.deleteProduct(Id).subscribe(data=>this.result=data.msg);
}
deleteRP(){
  this.deleteProduct(this.newProd);
  alert("Changes Completed");
  this.foundD=false;
  this.selectionButtons=false;
  this.findID="";
  this.inp="";
}
deleteR(){
  this.deleteRecord(this.updUser);
  alert("Changes Completed");
  this.foundD=false;
  this.selectionButtons=false;
  this.findID="";
  this.inp="";
}

}
