import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'capstone';
   activeHom= true;
   activeAss=false;
   activeCon=false;

   changeActive(el){
     //Make a LOOP?
    var lo = document.getElementById("one");
    lo.setAttribute("class","pestanas");
    var le = document.getElementById("two");
    le.setAttribute("class","pestanas");
    var li = document.getElementById("three");
    li.setAttribute("class","pestanas");
    if (el=='one'){ lo.setAttribute("class","pestanas active");}
    if (el=='two'){ le.setAttribute("class","pestanas active");}
    if (el=='three'){ li.setAttribute("class","pestanas active");}
   }
}
