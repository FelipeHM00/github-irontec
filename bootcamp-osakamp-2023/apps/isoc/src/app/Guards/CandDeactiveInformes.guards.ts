import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { InformesComponent } from "../Componentes/informes/informes.component";
import { LoginComponent } from "../Componentes/login/login.component";
import { EntradaComponent } from "../Componentes/entrada/entrada.component";

@Injectable({
    providedIn: 'root'
  })
  export class CanDeactivateInformesGuard implements CanDeactivate<InformesComponent> {
    canDeactivate(component: InformesComponent,
         currentRoute: ActivatedRouteSnapshot,
          currentState: RouterStateSnapshot,
           nextState: RouterStateSnapshot
           ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       return component.canExit() ;
    }
    
}