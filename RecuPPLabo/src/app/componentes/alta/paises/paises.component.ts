import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})
export class PaisesComponent {
  @Output() elegirPaisEvent = new EventEmitter<string>();
  paises: any[] = [];

  ngOnInit()
  {
    fetch('https://restcountries.com/v3.1/all').then((data:any)=>{
      console.log(data);
      return data.json();
    })
    .then((paises)=>{
      paises.forEach((pais:any) => {
        if(this.paises.length < 3)
        {
          this.paises.push(pais)
        }
      });
    }); 
  }

  enviarPaisElegido(pais:any)
  {
    this.elegirPaisEvent.emit(pais);
  }
}
