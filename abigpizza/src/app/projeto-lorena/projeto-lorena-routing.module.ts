import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetoLorenaPage } from './projeto-lorena.page';

const routes: Routes = [
  {
    path: '',
    component: ProjetoLorenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetoLorenaPageRoutingModule {}
