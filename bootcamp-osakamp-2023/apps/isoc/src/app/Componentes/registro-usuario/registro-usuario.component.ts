import { Component } from '@angular/core';
import { ServiceService } from '../../Services/auth.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'bootcamp-osakamp-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css'],
})
export class RegistroUsuarioComponent {
nombre="";
apellido="";
rol="";
email="";
password=""

constructor(private serviceService:ServiceService){}

registrar(){
  const body={
    nombre:this.nombre,
    apellido:this.apellido,
    role:this.rol,
    email:this.email,
    password:"11111"
  }
  this.serviceService.RegistrarUsuario(body).subscribe((data)=>{
    return `Registrado usuario ${data.nombre}` 
  })
}
sinacceso():boolean{
  if(confirm('No tienes acceso')){
    return false;
 }else{
  return false
 }
}

}
