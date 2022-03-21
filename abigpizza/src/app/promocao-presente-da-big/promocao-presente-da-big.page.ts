import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, SwiperOptions } from 'swiper';
import { AnimateService } from '../services/animate.service';
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-promocao-presente-da-big',
  templateUrl: './promocao-presente-da-big.page.html',
  styleUrls: ['./promocao-presente-da-big.page.scss'],
})
export class PromocaoPresenteDaBigPage implements OnInit {

  constructor(private animate: AnimateService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.animate.animateItens('.has-effect', 'fadeInUp')
  }

  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange(swiper) {
    console.log('slide change');
  }

  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 16,
    navigation: true,
    autoHeight: true
  };

  cards: {
    text: string,
    imgPath: string,
    description: string
  }[] = [
    { text: 'nevada', imgPath: 'nevada', description: 'Banana com canela e chocolate branco gratinado.' },
    { text: 'brigadeiro', imgPath: 'brigadeiro', description: 'Brigadeiro de panela e chocolate granulado.' },
    { text: 'banana com chocolate', imgPath: 'banana-c-chocolate', description: 'Banana, açúcar, canela e chocolate.' },
    { text: 'the boinas', imgPath: 'the-boinas', description: 'Creme de chocolate com avelã vegano.' },
    { text: 'churros', imgPath: 'churros', description: 'Doce de leite, açúcar e canela.' }
  ]

}
