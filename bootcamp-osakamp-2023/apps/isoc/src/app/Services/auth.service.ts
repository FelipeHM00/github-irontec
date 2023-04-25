import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = "Http://localhost:3333/api/auth/login"
  httpOptions={headers:{'Content-Type':'application/json'}}
  constructor(private http:HttpClient) {}

  validate(body:any):Observable<any>{
    console.log("Estoy en service")
    console.log(body)
    console.log(this.httpOptions)
    return this.http.post<any>(this.url,body,this.httpOptions)
    
  }

  RegistrarUsuario(body:any):Observable<any>{
    const url='http://localhost:3333/api/users'
    return this.http.post<any>(url,body)
  }

}
