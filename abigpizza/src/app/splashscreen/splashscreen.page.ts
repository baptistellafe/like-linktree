import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.navCtrl.navigateForward('/inicio')
    }, 3000);
  }

}
