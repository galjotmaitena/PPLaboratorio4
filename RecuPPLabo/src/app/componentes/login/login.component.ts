import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  admin = 'admin@admin.com';
  passA = '111111';
  empleado = 'empleado@empleado.com';
  passE = '222222';

  correo = "";
  clave = "";

  mostrarToast = false;
  mensaje = "";

  constructor(private authService : AuthService, private router : Router){}

  cargarDatos(_correo : string, _clave : string)
  {
    this.correo = _correo;
    this.clave = _clave;
  }

  iniciarSesion()
  {
    this.authService.login(this.correo, this.clave)
    ?.then(()=>{
      this.authService.log = true;
      setTimeout(() => {
        this.router.navigate(["/bienvenida"]);
      }, 2000);
    })
    .catch((error)=>{
      this.mostrarToast = true;
      this.mensaje = "Correo o contraseña incorrecta!";

      setTimeout(() => {
        console.log("ERROR: ", error);
        this.mostrarToast = false;
      }, 2000);
    })
  }
}
