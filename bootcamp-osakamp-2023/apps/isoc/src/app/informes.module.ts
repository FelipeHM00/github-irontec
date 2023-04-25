import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { InformesComponent } from './Componentes/informes/informes.component';
import { DiaComponent } from './Componentes/dia/dia.component';
import { YearComponent } from './Componentes/year/year.component';
import { MesComponent } from './Componentes/mes/mes.component';
import { RouterModule } from '@angular/router';
import { InformesRoutingModule } from './routes/Informes.rutas.module';
import { HeaderComponent } from './Componentes/header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InformesComponent,
    DiaComponent,
    YearComponent,
    MesComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, RouterModule, InformesRoutingModule,FormsModule],
  exports: [InformesComponent,DiaComponent, YearComponent, MesComponent,HeaderComponent],
})
export class InformesModule {}
