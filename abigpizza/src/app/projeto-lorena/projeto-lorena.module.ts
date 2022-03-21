import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjetoLorenaPageRoutingModule } from './projeto-lorena-routing.module';

import { ProjetoLorenaPage } from './projeto-lorena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetoLorenaPageRoutingModule
  ],
  declarations: [ProjetoLorenaPage]
})
export class ProjetoLorenaPageModule {}
