import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mostrar-container',
  templateUrl: './mostrar-container.component.html',
  styleUrls: ['./mostrar-container.component.scss']
})
export class MostrarContainerComponent {

  @Input() container: any;
  codigo: any;
  color: string = '';
  empresa: string = '';
  capacidad: any;

  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['container']) 
    {
      //alert(this.container.color)
      this.codigo = this.container.codigo;
      this.color = this.container.color;
      this.empresa = this.container.empresa;
      this.capacidad = this.container.capacidad;
    }
  }
}
