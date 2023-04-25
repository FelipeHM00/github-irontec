import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Services/auth.service';

@Component({
  selector: 'bootcamp-osakamp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

email = "";
password=""

  constructor(private serviceService:ServiceService, private router:Router){}
 

// Aqui hay que meter la funcion de ingresar el login en el auth pasandole data
  validate(){
    const objeto={
      email:this.email,
      password:this.password
    }
    
    this.serviceService.validate(objeto).subscribe((data: any)=>{
      console.log(data.acces_token)
      localStorage.setItem('jwt',data.acces_token)
      this.router.navigate(['/User'])
    })
    
  }
  RegistroUsuario(){
    this.router.navigate(['/registroUsuario'])
      } 
  validar(){
    // console.log(`Email: ${this.email}, Contraseña: ${this.password}`);
    // this.router.navigate([]),{queryParams:{email:this.email, password:this.password}}
    if (this.email === 'felipe@gmail.com' && this.password === '1234') {
      console.log(`Email: ${this.email}, Contraseña: ${this.password}`);
      this.router.navigate(['/User'], { queryParams: { email: this.email, password: this.password } });
    } else {
      alert('Usuario y/o contraseña incorrectos.');
    }
  }

  // validar(){
  //   console.log(`Email: ${this.email}, Contraseña: ${this.password}`);
  //   this.router.navigate([]),{queryParams:{email:this.email, password:this.password}}
    
  // }
}
