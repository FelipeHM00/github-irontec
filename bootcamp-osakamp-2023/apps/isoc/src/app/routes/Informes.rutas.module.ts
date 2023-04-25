import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InformesComponent } from '../Componentes/informes/informes.component';
import { DiaComponent } from '../Componentes/dia/dia.component';
import { MesComponent } from '../Componentes/mes/mes.component';
import { YearComponent } from '../Componentes/year/year.component';
import { CanDeactivateInformesGuard } from '../Guards/CandDeactiveInformes.guards';
import { CanChildGuardGuard } from '../Guards/CanChild.guards';



const rutes: Routes = [
    {
    path:'',
    component:InformesComponent,
    canDeactivate:[CanDeactivateInformesGuard],
    canActivateChild:[CanChildGuardGuard],
    children : [
     {
        path:'dia',
        component:DiaComponent
     } ,
     {
        path:'mes',
        component:MesComponent
     },{
        path:'year',
        component:YearComponent
     }  
    ]
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(rutes)],
  exports: [RouterModule],
  
})
export class InformesRoutingModule { }
