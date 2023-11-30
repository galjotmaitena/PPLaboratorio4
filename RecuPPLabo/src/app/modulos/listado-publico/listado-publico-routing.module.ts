import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPublicoComponent } from './listado-publico.component';

const routes: Routes = [{ path: '', component: ListadoPublicoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoPublicoRoutingModule { }
