import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { EntradaComponent } from "../Componentes/entrada/entrada.component";
import { LoginComponent } from "../Componentes/login/login.component";


@Injectable({
    providedIn: 'root'
  })
  export class GuardGuard implements CanDeactivate<EntradaComponent> {
    canDeactivate(component: EntradaComponent,
         currentRoute: ActivatedRouteSnapshot,
          currentState: RouterStateSnapshot,
           nextState: RouterStateSnapshot
           ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       return component.canExit() ;
    }
    
}