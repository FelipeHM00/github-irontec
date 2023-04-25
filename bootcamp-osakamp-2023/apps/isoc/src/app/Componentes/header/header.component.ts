import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// import {biCalendarWeek} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'bootcamp-osakamp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
estado="0"

  constructor(private store:Store<{contador:string}>){
    this.store.subscribe(state=>{
      this.estado=state.contador
    })

  }
  getColor(){
    return{'color':this.estado ? 'red':'green'}
  }
 
  
}

