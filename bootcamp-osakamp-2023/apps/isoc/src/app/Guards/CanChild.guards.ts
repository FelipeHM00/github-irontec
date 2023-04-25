import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DecodificacionService } from '../Services/Decodificador.jwt';

@Injectable({
  providedIn: 'root',
})
export class CanChildGuardGuard implements CanActivateChild {

    constructor(private decodificador:DecodificacionService){ }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    // 
    // return this.decodificador.nuestroRol()
    return true
  }
}
