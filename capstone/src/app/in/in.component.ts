import { Component, OnInit } from '@angular/core';
import { SharingService } from '../sharing.service';
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
   currentUser:User;
   in:boolean;

  userPortal:boolean;
  adminPortal:boolean;
  inform:boolean;
  selectionButtons:boolean;
  
  editUser:boolean;
  editProduct:boolean;
  users:Array<User>;


  constructor(public userService:UserService,private sharingService:SharingService) {
  this.loadUsers();
  this.userPortal=false;
  this.adminPortal=false;
  this.inform=true;
  this.editUser=false;
  this.editProduct=false;
  this.selectionButtons=false;
  this.foundH=false;
   }

  ngOnInit(): void {

  }
  loadUsers(){
    this.userService.getAllUsers().subscribe(data=>{
      this.users=data; 
    });
  }

  select(ent){
  this.inpd = ent;
  this.inp = ent;
  this.selectionButtons=true;
  } 
  selecto(ent){
    this.inp=this.inp+ent;

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

updateAcc(userRef){
  this.userService.updateAccount(userRef).subscribe(data=>this.result=data.msg);
}
updateUs(){
   this.updateAcc(this.updUser);
   alert("Changes Completed");
   this.foundH=false;
   this.selectionButtons=false;
   this.inp="";
}

}
