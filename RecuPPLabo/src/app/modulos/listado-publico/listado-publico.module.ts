import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoPublicoRoutingModule } from './listado-publico-routing.module';
import { ListadoPublicoComponent } from './listado-publico.component';


@NgModule({
  declarations: [
    ListadoPublicoComponent
  ],
  imports: [
    CommonModule,
    ListadoPublicoRoutingModule
  ]
})
export class ListadoPublicoModule { }
