import { Injectable } from "@angular/core";
import jwt_decode from 'jwt-decode'


@Injectable({
    providedIn: 'root'
  })

  export class DecodificacionService {

    decodificarToken(token:string){
        const decodifica= jwt_decode<any>(token)
        localStorage.setItem("usuario",decodifica.username)
        localStorage.setItem("Rol",decodifica.role);
        localStorage.setItem("userId",decodifica.userID)
    }

    nuestroRol():boolean{
        // Parece ser que el rol esté metido en un array. En ese caso tenemos que parsearlo porque
        // en localstrategy está en string y una vez 
        // const rolarray=JSON.parse(rol) as Array<string>
        // if(rolarray.length ==0){return false}
        const rol=localStorage.getItem("Rol")
        if(rol=="Admin"){
            return true
        }else{
            return false
        }
    }
  }
