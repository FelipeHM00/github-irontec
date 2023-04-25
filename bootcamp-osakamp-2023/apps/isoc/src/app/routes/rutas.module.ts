import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaComponent } from '../Componentes/dia/dia.component';
import { InformesComponent } from '../Componentes/informes/informes.component';
import { LoginComponent } from '../Componentes/login/login.component';
import { MesComponent } from '../Componentes/mes/mes.component';
import { EntradaComponent } from '../Componentes/entrada/entrada.component';
import { GuardGuard } from '../Guards/CanDeactive.guards';
import { CanLoadGuardGuard } from '../Guards/Canload.guars';
import { InformesRoutingModule } from './Informes.rutas.module';
import { RegistroUsuarioComponent } from '../Componentes/registro-usuario/registro-usuario.component';
import { CandGuard } from '../Guards/Can.Guards';
import { AusenciasComponent } from '../Componentes/ausencias/ausencias.component';



const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'User',
    component: EntradaComponent,
    canDeactivate:[GuardGuard],     
      },
      {
        path:'registroUsuario',
        component:RegistroUsuarioComponent,
        canActivate:[CandGuard]
      },
      {
        path:'solicitudAusencia',
        component:AusenciasComponent,
        
      },
  {
   path:'informes',
        loadChildren: () => import('./../informes.module').then(m => m.InformesModule),
  canLoad:[CanLoadGuardGuard]
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
