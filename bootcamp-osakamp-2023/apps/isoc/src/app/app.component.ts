import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Action } from '@ngrx/store'
import { Geolocalitation } from './Services/Geolocalitation.service';

interface AppState{
  contador:string;
} 

@Component({
  selector: 'bootcamp-osakamp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'isoc';

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
   estado:string = "0";

  constructor( private store:Store<AppState>,private ubicacion:Geolocalitation){
    this.store.subscribe(state=>{
      this.estado=state.contador
   });
  }
  get localizacionListo(){
    console.log(this.ubicacion.localizacion)
    return this.ubicacion.localizacionListo
  }

  login(){
    const accion:Action = {
      type:'Input'
    }
    this.store.dispatch(accion)
  }
  logout(){
    const accion:Action = {
      type:'Output'
    }
    this.store.dispatch(accion)
  }
}
