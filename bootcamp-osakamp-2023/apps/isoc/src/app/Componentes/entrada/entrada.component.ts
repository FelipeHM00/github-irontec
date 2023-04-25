import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Action, Store } from '@ngrx/store';
import { DecodificacionService } from '../../Services/Decodificador.jwt';
import { EntradaService } from '../../Services/entrada.service';
import { EstadoService } from '../../Services/Estado.service';
import { Geolocalitation } from '../../Services/Geolocalitation.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'bootcamp-osakamp-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  username = "";
  userId=localStorage.getItem("userId")
  loggedIn = false;
  currentDate='';
  estado="0";
  donde?:[number,number];
  regi="";
  rol?:string | null;
  elmes=[
    "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
  ]

  



  constructor( private store:Store<{contador:string}>,
    private router:Router,
    private entradaService:EntradaService,
    private ubicacion:Geolocalitation,
    private decodificar:DecodificacionService,
    private estadoAnterior:EstadoService){
    this.store.subscribe(state=>{
      this.estado=state.contador
   });
  }

  ngOnInit(){
    
    const token=localStorage.getItem('jwt')
    if(token!==null){
      this.decodificar.decodificarToken(token)
    }  
    this.rol=localStorage.getItem('Rol')    
      this.donde=this.ubicacion.localizacion      
      this.estadoAnterior.registrar().subscribe(data=>{ 
        console.log(data) 
        if(data.length>0) {
        if(data[data.length-1].status=="Trabajo"){
          const accion:Action = {
            type:'Input'
          }
          this.store.dispatch(accion)
        }else{
          const accion:Action = {
            type:'Output'
          }
          this.store.dispatch(accion)
        }
      
        this.regi=data[data.length-1].registroId
        this.estado=data[data.length-1].status
        console.log(data[data.length-1].registroId)
      }
      })
      
  }
  
      get localizacionListo(){
      console.log(this.ubicacion.localizacion)
      this.donde=this.ubicacion.localizacion
      return this.donde=this.ubicacion.localizacion
      }

  informes(){
this.router.navigate(['/informes'])
  } 

  RegistroUsuario(){
    this.router.navigate(['/registroUsuario'])
      } 

  login() {
    const accion:Action = {
    type:'Input'
  }
  this.store.dispatch(accion)
    const now=new Date();
    const horas=now.getHours();
    const minutos=now.getMinutes();
    const mes=now.getMonth();
    const year=now.getFullYear();
    const horaEntrada=`${horas}:${minutos}`
    const mesActual=this.elmes[mes]

    this.currentDate=`Fecha actual: ${now.toLocaleString()}`
    this.loggedIn = true;
    const body={       
      userId: this.userId,
      date: now.toLocaleDateString('es-Es',{day:'2-digit',month:'2-digit',year:'2-digit'}),
      mes:mesActual,
      year:year,
      status: "Trabajo",            
      place:this.donde,
      timeIn:horaEntrada,
      timeOut:""
    }
    this.entradaService.registrar(body).subscribe((data)=>{
      console.log(data) 
    })
    
    this.estadoAnterior.registrar().subscribe((data)=>{
      console.log(data)
      if(data.length>0){
      this.regi=data[data.length-1].registroId
      }
    })
      
  }

  async logout() {
    const now=new Date();
    const horas=now.getHours();
    const minutos=now.getMinutes();
    const horaSalida=`${horas}:${minutos}`;
    
    const accion:Action = {
      type:'Output'
    }
    this.store.dispatch(accion)
    
    this.currentDate=`Fecha actual: ${now.toLocaleString()}`;
    this.loggedIn=true;
    
    this.estadoAnterior.registrar().subscribe((data)=>{
      console.log(data)
      this.regi=data[data.length-1].registroId
    })
    const body={  
      registroId:this.regi,    
      userId: this.userId,
      date: now.toLocaleDateString('es-Es',{day:'2-digit',month:'2-digit',year:'2-digit'}),
      status: "Descanso",            
      place:this.donde,
      timeOut:horaSalida
    }
    console.log(body)

    this.entradaService.salir(body).subscribe((data)=>{
      console.log(data)      
    })

  }
  SolicitudAusencias(){
    this.router.navigate(['/solicitudAusencia'])
  }
  canExit():boolean{
    if(confirm(`Si sales ahora tu estado queda en hora de ${this.estado}`)){
      return true;
   }else{
    return false
   }
  }
 
}