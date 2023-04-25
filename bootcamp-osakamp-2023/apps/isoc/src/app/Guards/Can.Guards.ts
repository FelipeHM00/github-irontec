import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistroUsuarioComponent } from '../Componentes/registro-usuario/registro-usuario.component';
import { DecodificacionService } from '../Services/Decodificador.jwt';

@Injectable({
  providedIn: 'root',
})
export class CandGuard implements CanActivate {
    constructor(private decodificador:DecodificacionService){ }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
     boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.decodificador.nuestroRol()==true){
            console.log("Es administrador")
            return true
        }else {
            console.log("No es administrador")
            alert("No eres Administrador")
            return false
        }
    }

    
        
    
}
