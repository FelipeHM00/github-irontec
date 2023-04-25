import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'bootcamp-osakamp-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css'],
})
export class InformesComponent {

 

  constructor(private router:Router){ }

onClickdia(){
this.router.navigate(['/informes/dia'])
}
canExit():boolean{
    if(confirm('Si sales ahora estas en estado de ')){
      return true;
   }else{
    return false
   }
  }
}
