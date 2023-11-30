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
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root',
})
export class perfilGuard implements CanActivate 
{
  private constructor(private auth: AuthService) {}
  
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {  
    let ret = false;

    if(this.auth.log && this.auth.getEmail() === 'admin@admin.com')
    {
      ret = true;
    }

    return ret;
  }
}
