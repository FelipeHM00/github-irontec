import { DatePipe } from '@angular/common';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Idia } from '../../Constante/dia';
import { EstadoService } from '../../Services/Estado.service';
import * as moment from 'moment'

@Component({
  selector: 'bootcamp-osakamp-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.css'],
  providers:[DatePipe]
})
export class DiaComponent {
  constructor(private estadoService:EstadoService,private datePipe:DatePipe ){}
datos?:Idia[]=
[{userId:0,
  registroId:0,
  date:"a",
  timeIn:"",
  timeOut:"",
  outType:"",
  place:[0,0],
  status:"",
  notes:"",
  total:0,
  mes:"",
  year:0,
  aceptado:"",
ausencia:"",
dateFin:""
}
]

HoraEntrada?:""
HoraSalida?:""
public dia?:"";
public fecha_nueva="";
sum = 0;

  
Datos(){
  this.fecha_nueva = moment(this.dia, 'YYYY/MM/DD').format('DD/MM/YY');
  console.log(this.fecha_nueva)
return this.estadoService.unDia(this.fecha_nueva).subscribe((dato)=>{
  // this.datos=dato[dato.length-1]
  console.log(dato)
  const algo =dato.forEach((element:{timeIn:string,timeOut:string,total:number}) => {
    if(element.timeIn!="" && element.timeOut!=""){
    const uno=element.timeIn.split(":")
    const dos=element.timeOut.split(":")
    const numero=parseInt(uno[0])*60+parseInt(uno[1])
    const numeroDos=parseInt(dos[0])*60+parseInt(dos[1])
    const total=(numeroDos-numero)/60
    element.total=total
  }else{
    element.total=0
  }
  
  });
  this.datos=dato
  this.hacerSuma()
})
}
hacerSuma(){
  if(this.datos!=undefined){
    this.sum=0
    const otro=this.datos.forEach(element => {
      if(element.total==undefined || element.total==null ){
        console.log("este no lo suma")
      }else{this.sum+=element.total}
      
    });
    console.log(this.sum)
  }
}
}
