import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { EstadoService } from "./Estado.service"


@Injectable({
    providedIn: 'root'
  })
  export class EntradaService {
  
    url = "Http://localhost:3333/api/registro"
    httpOptions={headers:{'Content-Type':'application/json'}}
    constructor(private http:HttpClient,private estadoAnterior:EstadoService) {}
  
  registrar(body:any):Observable<any>{
    
    return this.http.post<any>(this.url,body,this.httpOptions)
    
  }
  salir(body:any):Observable<any>{
    
    
    return this.http.put<any>(this.url,body,this.httpOptions)
  }
  
}