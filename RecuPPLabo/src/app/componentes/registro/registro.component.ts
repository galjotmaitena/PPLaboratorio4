import { Router } from '@angular/router';
import { Component, EventEmitter, Output } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  correo: string = '';
  clave: string = '';
  form: FormGroup;
  check: any;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router)
  {
    this.form = this.formBuilder.group({
      correo: ['', Validators.required],
      clave: ['', Validators.required],
      check: [''],
    });
  }

  registrarse()
  {
    //this.auth.signUp(this.correo, this.clave);
    this.auth.log = true;
    this.router.navigateByUrl('bienvenida');
  }

  ingresar()
  {
/*     this.auth.signin(this.email, this.clave)?.then(()=>{
      this.auth.logueado = true;
      this.router.navigateByUrl('home');
    }); */
  }
}
