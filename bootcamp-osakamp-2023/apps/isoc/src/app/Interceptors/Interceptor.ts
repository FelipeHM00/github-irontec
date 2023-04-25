import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";

@Injectable({providedIn: "root"})
export class MyInterceptor implements HttpInterceptor{
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable <HttpEvent<any> >{
        console.log(req)
        const token=localStorage.getItem('jwt')
        console.log(token)
        let requestClone = req;
        if(!this.isLogin(req.url)){
           requestClone= req.clone({
                    headers:req.headers.set('Authorization', `Bearer ${token}`)
                    
                })  
                console.log(requestClone)              
        }
        return next.handle(requestClone).pipe(catchError((error)=>{
            console.log(requestClone)
            console.log("Tenemos un error")
            return this.recuperadorErrores(error)}))
       }
private isLogin(url:string):boolean{
    console.log(url.includes("login") != true)
    return url.includes("login") != false
}
recuperadorErrores(error:HttpErrorResponse){
    if(error instanceof HttpErrorResponse){
        if(error instanceof ErrorEvent){
            console.log("Error del cliente");
        }else{
            if(error.status==401){
                alert("No estás autorizado o has metido mal email y contraseña")
            }
            if(error.status==400){
                alert("La solicitud no es correcta")
            }
            if(error.status==404){
                alert("No hay conexión con el servidor")
            }
        }
    }else{
            console.log("Otro tipo de error");
        }
        return throwError(error);
    }
}
