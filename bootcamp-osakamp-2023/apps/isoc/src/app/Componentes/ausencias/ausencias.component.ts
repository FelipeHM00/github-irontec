import { Component } from '@angular/core';
import * as moment from 'moment';
import { EntradaService } from '../../Services/entrada.service';
import { EstadoService } from '../../Services/Estado.service';

@Component({
  selector: 'bootcamp-osakamp-ausencias',
  templateUrl: './ausencias.component.html',
  styleUrls: ['./ausencias.component.css'],
})
export class AusenciasComponent {

  constructor(private buscar:EntradaService){}

FechaInicio="";
FechaFin="";
HoraInicio="";
HoraFin="";
Ausencias=[
  {nombre:"Vacaciones"},{nombre:"Libre"},{nombre:"Medico"},{nombre:"Baja"},
];
ausenciaSeleccionada=""
onValueChange() {
  console.log(this.ausenciaSeleccionada); // Aquí puedes hacer lo que quieras con el valor seleccionado
}

solicitar(){
  const fechaInicio_nueva = moment(this.FechaInicio, 'YYYY/MM/DD').format('DD/MM/YY')
  const fechaInicioNumber=new Date(this.FechaInicio)
  const fechaFinNumber=new Date(this.FechaFin)
  const mes=fechaInicioNumber.toLocaleString('es', { month: 'long' });
  const mesBueno=mes.charAt(0).toUpperCase() + mes.slice(1)
  const year=fechaInicioNumber.getFullYear()
  const fechaFin_nueva = moment(this.FechaFin, 'YYYY/MM/DD').format('DD/MM/YY')
const body={
  userId:localStorage.getItem('userId'),
  date:fechaInicio_nueva,
  dateFin:fechaFin_nueva,
  status:"Descanso",
  timeIn:this.HoraInicio,
  timeOut:this.HoraFin,
  ausencia:this.ausenciaSeleccionada,
  aceptado:"no",
  mes:mesBueno,
  year:year
  }


  console.log("esto")
  return this.buscar.registrar(body).subscribe((dato)=>{
    console.log(dato)
  })
}


}
