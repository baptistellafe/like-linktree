import { Component, OnInit, ViewChild } from '@angular/core';
import { AnimateService } from '../services/animate.service';

@Component({
  selector: 'app-projeto-lorena',
  templateUrl: './projeto-lorena.page.html',
  styleUrls: ['./projeto-lorena.page.scss'],
})
export class ProjetoLorenaPage implements OnInit {

  socialBtns: {
    router: string,
    title: string,
    icon: string,
  }[] = [
    { router: 'https://www.facebook.com/projetolorena013', title: 'Siga no facebook', icon: 'logo-facebook' },
    { router: 'https://www.instagram.com/projetolorena013/', title: 'Siga no instagram', icon: 'logo-instagram' },
    { router: 'https://api.whatsapp.com/send?phone=5513981367689', title: 'Chame no whatsapp', icon: 'logo-whatsapp' },
    { router: 'tel:5513981367689', title: 'Faça uma ligação', icon: 'call-outline' },
    { router: 'mailto:projetolorena013@gmail.com', title: 'Envie um email', icon: 'mail-outline' }

    
  ]

  constructor(private animate: AnimateService) { }

  ngOnInit() {
   
  }

  ionViewWillEnter() {
    this.animate.animateItens('.has-effect', 'fadeInUp')
  }

}
