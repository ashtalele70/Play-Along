import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Create Game',
      url: '/game',
      icon: 'add-circle-outline'
    },
    {
      title: 'Registergames',
      url: '/registergames',
      icon: 'add-circle'
    },
    {
      title: 'Createclass',
      url: '/createclass',
      icon: 'add-circle'
    },
    {
      title: 'Wallet',
      url: '/wallet',
      icon: 'card'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'log-out'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
