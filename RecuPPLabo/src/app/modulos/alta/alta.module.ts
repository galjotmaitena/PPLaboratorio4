import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AltaRoutingModule } from './alta-routing.module';
import { AltaComponent } from './alta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaisesComponent } from 'src/app/componentes/alta/paises/paises.component';
import { ProductoComponent } from 'src/app/componentes/alta/producto/producto.component';

@NgModule({
  declarations: [
    AltaComponent,
    ProductoComponent,
    PaisesComponent
  ],
  imports: [
    CommonModule,
    AltaRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AltaModule { }
