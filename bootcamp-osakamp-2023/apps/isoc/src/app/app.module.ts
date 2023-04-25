import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';

import { FrontEndAngularModule } from '@bootcamp-osakamp/front-end-angular';
import { LoginComponent } from './Componentes/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EntradaComponent } from './Componentes/entrada/entrada.component';
import { AppRoutingModule } from './routes/rutas.module';
import { MyInterceptor } from './Interceptors/Interceptor';

import { CanLoadGuardGuard } from './Guards/Canload.guars';
import { CanChildGuardGuard } from './Guards/CanChild.guards';
import { GuardGuard } from './Guards/CanDeactive.guards';

import { InformesComponent } from './Componentes/informes/informes.component';
import { InformesModule } from './informes.module';
import { Store, StoreModule } from '@ngrx/store';
import { contadorReducer } from './Contador/Contador.reducer';
import { CommonModule, DatePipe } from '@angular/common';
import { RegistroUsuarioComponent } from './Componentes/registro-usuario/registro-usuario.component';
import { HeaderComponent } from './Componentes/header/header.component';

import { CandGuard } from './Guards/Can.Guards';
import { AusenciasComponent } from './Componentes/ausencias/ausencias.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    LoginComponent,
    EntradaComponent,
    RegistroUsuarioComponent,
    AusenciasComponent,
  ],
  imports: [
    BrowserModule,
    FrontEndAngularModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    InformesModule,
    CommonModule,
    FontAwesomeModule,
    StoreModule.forRoot({ contador: contadorReducer }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true,
    },
    CandGuard,
    GuardGuard,
    CanLoadGuardGuard,
    CanChildGuardGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
