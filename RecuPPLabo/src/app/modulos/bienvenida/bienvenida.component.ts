import { Component } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent {

  perfil : any;
  url : string = "https://api.github.com/users/galjotmaitena";

  usuario = this.authService.getEmail().split('@')[0];
  userLogeado = false;

  constructor(private authService : AuthService) {}

  ngOnInit() 
  {
    fetch(this.url).then(response => response.json()).then((data : any) => {
      this.perfil = data;
    });

    if(this.usuario != "")
    {
      this.userLogeado = true;
    }
  }

  logout()
  {
    this.authService.logout()
    ?.then(()=>{
      this.authService.log = false;
      this.userLogeado = false;
      this.usuario = "";
    })
    .catch((error)=>{
      setTimeout(() => {
        console.log("ERROR: ", error);
      }, 1500);
    })
  }

}
