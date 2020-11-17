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

   currentUser:User;
   in:boolean;

  userPortal:boolean;
  adminPortal:boolean;
  inform:boolean;
  
  users:Array<User>;


  constructor(public userService:UserService,private sharingService:SharingService) {
  this.loadUsers();
  this.userPortal=false;
  this.adminPortal=false;
  this.inform=true;
   }

  ngOnInit(): void {

  }
  loadUsers(){
    this.userService.getAllUsers().subscribe(data=>{
      this.users=data; 
    });
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
      else {alert("❌: Sing in uncsuccessful, please try again!")}
      
    

  }

}
