import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class CanLoadGuardGuard implements CanLoad {
    canLoad(
        route: Route,
        segments: UrlSegment[]
        ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
            return true;
            // throw new Error("Method not implemented.");
            // Aquí hay que poner que solo lo enseñe si tiene jwt validado.
    }
}