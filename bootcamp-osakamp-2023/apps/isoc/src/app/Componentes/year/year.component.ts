import { Component } from '@angular/core';
import { Idia } from '../../Constante/dia';
import { EstadoService } from '../../Services/Estado.service';

@Component({
  selector: 'bootcamp-osakamp-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css'],
})
export class YearComponent {
  constructor(private obtenRegistro:EstadoService){}

  yearElegido=[
    {nombre:"2023",valor:"2023"},
    {nombre:"2024",valor:"2024"},
    {nombre:"2025",valor:"2025"},
    {nombre:"2026",valor:"2026"},
    {nombre:"2027",valor:"2027"},
    {nombre:"2028",valor:"2028"},
    {nombre:"2029",valor:"2029"},
    {nombre:"2030",valor:"2030"},
    {nombre:"2031",valor:"2031"},
    {nombre:"2032",valor:"2032"},
    {nombre:"2033",valor:"2033"},
    {nombre:"2034",valor:"2034"},
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
ausencia:"",
aceptado:"",
dateFin:""}
];
mes=[
  {nombre:"Enero",valor:0},{nombre:"Febrero",valor:0},{nombre:"Marzo",valor:0},{nombre:"Abril",valor:0},{nombre:"Mayo",valor:0},{nombre:"Junio",valor:0},{nombre:"Julio",valor:0},{nombre:"Agosto",valor:0},{nombre:"Septiembre",valor:0},{nombre:"Octubre",valor:0},{nombre:"Noviembre",valor:0},{nombre:"Diciembre",valor:0}
]

HoraEntrada?:""
HoraSalida?:""
public dia?:"";
public fecha_nueva=""
yearSeleccionado="";
sum=0

onValueChange() {
  console.log(this.yearSeleccionado); // Aquí puedes hacer lo que quieras con el valor seleccionado
}

traerRegistros(){
console.log(this.yearSeleccionado)

return this.obtenRegistro.traeryear(this.yearSeleccionado).subscribe((dato)=>{
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
  this.sumarMeses()
})
}

sumarMeses(){
  if(this.datos!==undefined){
  
  this.datos.forEach(element => {
    this.mes.forEach(item=>{
      if(element.mes==item.nombre){
        item.valor+=element.total
      }
    })
        
  });
//  

}
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
