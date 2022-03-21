import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromocaoPresenteDaBigPageRoutingModule } from './promocao-presente-da-big-routing.module';

import { PromocaoPresenteDaBigPage } from './promocao-presente-da-big.page';
import { SwiperModule } from 'swiper/angular';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromocaoPresenteDaBigPageRoutingModule,
    SwiperModule,
    ComponentsModule
  ],
  declarations: [PromocaoPresenteDaBigPage]
})
export class PromocaoPresenteDaBigPageModule {}
