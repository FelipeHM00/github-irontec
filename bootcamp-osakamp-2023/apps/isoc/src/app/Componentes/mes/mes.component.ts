import { Component } from '@angular/core';
import { Idia } from '../../Constante/dia';
import { EstadoService } from '../../Services/Estado.service';

@Component({
  selector: 'bootcamp-osakamp-mes',
  templateUrl: './mes.component.html',
  styleUrls: ['./mes.component.css'],
})
export class MesComponent {

  constructor(private obtenRegistro:EstadoService){}

  mesElegido=[
    {nombre:"Enero",valor:"Enero"},
    {nombre:"Febrero",valor:"Febrero"},
    {nombre:"Marzo",valor:"Marzo"},
    {nombre:"Abril",valor:"Abril"},
    {nombre:"Mayo",valor:"Mayo"},
    {nombre:"Junio",valor:"Junio"},
    {nombre:"Julio",valor:"Julio"},
    {nombre:"Agosto",valor:"Agosto"},
    {nombre:"Septiembre",valor:"Septiembre"},
    {nombre:"Octubre",valor:"Octubre"},
    {nombre:"Noviembre",valor:"Noviembre"},
    {nombre:"Diciembre",valor:"Diciembre"},
  ]
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
dateFin:""}
]

HoraEntrada?:""
HoraSalida?:""
public dia?:"";
public fecha_nueva=""
mesSeleccionado="";
sum = 0;

onValueChange() {
  console.log(this.mesSeleccionado); // Aquí puedes hacer lo que quieras con el valor seleccionado
}

traerRegistros(){
console.log(this.mesSeleccionado)

return this.obtenRegistro.traerMes(this.mesSeleccionado).subscribe((dato)=>{
  console.log(dato)
  const algo =dato.forEach((element:{timeIn:string,timeOut:string,total:number}) => {
    if(element.timeIn!=="" && element.timeOut!==""){
    const uno=element.timeIn.split(":")
    const dos=element.timeOut.split(":")
    const numero=parseInt(uno[0])*60+parseInt(uno[1])
    const numeroDos=parseInt(dos[0])*60+parseInt(dos[1])
    const total=(numeroDos-numero)/60
    element.total=total;
    console.log(element.total)
    }else{
      element.total=0;
      console.log(element.total)
    }
  });
  this.datos=dato;
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

