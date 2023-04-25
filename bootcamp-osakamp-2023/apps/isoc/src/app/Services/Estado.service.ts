import { HttpClient, HttpParams } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"

@Injectable({
    providedIn: 'root'
  })
  export class EstadoService {
  
    url = "Http://localhost:3333/api/registro"
    httpOptions={headers:{'Content-Type':'application/json'}}
    user=localStorage.getItem("userId")
    
    constructor(private http:HttpClient) {}
  
  registrar():Observable<any>{
    console.log("Estoy en service")
    
    return this.http.get<any>(`${this.url}/estado/${this.user}`)
  }
  unDia(valor:any):Observable<any>{
    console.log(valor)
    const params=new HttpParams().set('date',valor)
    return this.http.get<any>(`${this.url}/dia`,{params})
  }
  traerMes(mes:string):Observable<any>{
    const params=new HttpParams().set('date',mes)
    return this.http.get<any>(`${this.url}/mes`,{params})
  }
  traeryear(year:string):Observable<any>{
    const params=new HttpParams().set('date',year)
    return this.http.get<any>(`${this.url}/year`,{params})
  }
  
}

