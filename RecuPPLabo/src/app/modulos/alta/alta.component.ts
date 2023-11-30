import { Component } from '@angular/core';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.scss']
})
export class AltaComponent 
{
  paisElegido:any;

  constructor(){}

  elegirPais(pais:any)
  {
    //console.log(pais.nombre);
    this.paisElegido = pais;
  }
}
