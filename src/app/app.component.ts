import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TrabAvaliacao } from './../pages/trab-avaliacao/trab-avaliacao';
import { TarefasPage } from './../pages/tarefas/tarefas';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  // NOME E EMAIL DO USUÁRIO
  nome: string = 'Irineu, você não sabe nem eu';
  email: string = 'exemplo@exemplo.priore.br'

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Tarefas', component: TarefasPage },
      //{ title: 'Calendário e Eventos, component: CalendarioPage' }
      { title: 'Trabalhos e Avaliações', component: TrabAvaliacao }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  callPage(page: any){
    this.nav.setRoot(page);

  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
