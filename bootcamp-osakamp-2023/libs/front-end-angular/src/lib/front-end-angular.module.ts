import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { EntradasComponent } from './entradas/entradas.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoginComponent, EntradasComponent],
})
export class FrontEndAngularModule {}
