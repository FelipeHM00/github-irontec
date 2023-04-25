import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class Geolocalitation  {
    // La ? quiere decir que la localizacion puede que esté o que no. Se podria poner que es indefinido.
    localizacion?:[number,number];

    get localizacionListo(){
        return !!this.localizacion
    }
    // Esto a nosotros nonos sirve
    constructor(){this.geolocalizacion()}

    async geolocalizacion():Promise<[number,number]>{

         return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                ({coords})=> {
                    this.localizacion=[coords.longitude,coords.latitude];
                    resolve(this.localizacion)
                },
                (err)=>{
alert("No se puede obtener la geolocalizacion");
reject()
                }
            )
         })
        }
    }
   

  