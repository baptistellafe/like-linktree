import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbigPizzasComponent } from './abig-pizzas/abig-pizzas.component';



@NgModule({
  declarations: [AbigPizzasComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    AbigPizzasComponent
  ]
})
export class ComponentsModule { }
