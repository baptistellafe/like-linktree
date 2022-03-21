import { NavController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AnimateService } from '../services/animate.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  socialBtns: {
    router: string,
    title: string,
    icon: string,
  }[] = [
    { router: 'https://www.facebook.com/aBigPizzas/', title: 'Siga no facebook', icon: 'logo-facebook' },
    { router: 'https://www.instagram.com/abigpizzas/', title: 'Siga no instagram', icon: 'logo-instagram' },
    { router: 'https://api.whatsapp.com/send?phone=32239191&text=Ol%C3%A1%20Big%20Pizzas', title: 'Chame no whatsapp', icon: 'logo-whatsapp' },
    { router: 'tel:551332239191', title: 'Faça uma ligação', icon: 'call-outline' }
  ]

  btns: {
    isInverted?: boolean,
    text: string,
    textStrong?: string,
    router: string,
    title: string,
    class: string,
    fill: string,
    icon?: string,
    hasImage?: string,
    isLink: boolean
  }[] = [
    {
      text: 'pelo',
      textStrong: 'Peça agora',
      isInverted: true,
      hasImage: './../../assets/images/xmenuwhite.png',
      router: 'https://xmenu.com.br/pedidos/?loja=15275&camp=SITE',
      title: 'Peça agora pelo XMENU',
      class: 'solid-orange',
      fill: 'solid',
      icon: 'pizza',
      isLink: true
    },
    {
      text: 'Veja nosso',
      textStrong: 'Cardápio',
      router: '/cardapio',
      title: 'Confira nosso cardápio',
      class: 'outline-white',
      fill: 'outline',
      isLink: false
    },
    {
      text: 'Presente da Big',
      textStrong: 'Promoção',
      router: '/promocao-presente-da-big',
      title: 'Promoção - Presente da Big',
      class: 'outline-white',
      fill: 'outline',
      isInverted: true,
      isLink: false
    },
    {
      text: 'Projeto',
      textStrong: 'Lorena',
      router: '/projeto-lorena',
      title: 'Projeto Lorena, contribua',
      class: 'solid-white',
      fill: 'outline',
      isLink: false
    },
  ]

  constructor(private navCtrl : NavController, private alertCtrl : AlertController, private animate: AnimateService) { }

  ngOnInit() {
  }
  

  async redirect(routerType, router) {
    if (routerType) {
      const alert = await this.alertCtrl.create({
        mode: 'ios',
        cssClass: 'bigpizza-alert',
        header: 'A Big Pizzas',
        message: 'Vamos te redirecionar para o site de delivery, tudo bem?',
        buttons: [ {
            text: 'Tudo bem, quero pedir',
            id: 'confirm-button',
            cssClass: 'primary',
            handler: () => {
              this.alertCtrl.dismiss()
              
              setTimeout(() => {
                window.location.href = "https://xmenu.com.br/pedidos/?loja=15275&camp=SITE";
              }, 1000);
            }
          }
        ]
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);

    } else {
      this.navCtrl.navigateForward(router)
    }
  }

  ionViewWillEnter() {
    this.animate.animateItens('.has-effect', 'fadeInUp')
  }

}
