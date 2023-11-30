import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
//import { ToastService } from 'angular-toastify';
import { Observable } from 'rxjs';
import { RegistroComponent } from '../componentes/registro/registro.component';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root',
})
export class resgistroGuard implements CanDeactivate<RegistroComponent> {
  private constructor(private auth: AuthService) {}
  
  canDeactivate(
    component: RegistroComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

      this.auth.signUp(component.correo, component.clave);
      this.auth.login(component.correo, component.clave)?.then(()=>{
        this.auth.log = true;
      });
    return component.check && component.form.valid;
  }
}