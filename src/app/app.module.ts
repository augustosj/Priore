import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TarefasPage } from '../pages/tarefas/tarefas';
import { TrabAvaliacao } from './../pages/trab-avaliacao/trab-avaliacao';
import { TarefasCadastroPage } from "../pages/tarefas-cadastro/tarefas-cadastro";
import { CalendarioPage } from '../pages/calendario/calendario';
import { CalendarioDetalhaPage } from '../pages/calendario-detalha/calendario-detalha';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { PerfilPage } from '../pages/perfil/perfil';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { TarefasDetalhaPage } from '../pages/tarefas-detalha/tarefas-detalha';
import { TrabAvaliacaoDetalhaPage } from '../pages/trab-avaliacao-detalha/trab-avaliacao-detalha';
import { SigninEmailPage } from '../pages/signin-email/signin-email';

var config = {
  apiKey: "AIzaSyCWB9Q0wJdBpO_M2ACl0yJeb01HsfZtzds",
  authDomain: "priore-7bdbb.firebaseapp.com",
  databaseURL: "https://priore-7bdbb.firebaseio.com",
  projectId: "priore-7bdbb",
  storageBucket: "",
  messagingSenderId: "598863385452"
};

@NgModule({
  declarations: [
    MyApp,
    CalendarioPage,
    CalendarioDetalhaPage,
    ConfiguracaoPage,
    PerfilPage,
    HomePage,
    SigninPage,
    SigninEmailPage,
    SignupPage,
    TarefasPage,
    TarefasCadastroPage,
    TarefasDetalhaPage,
    TrabAvaliacao,
    TrabAvaliacaoDetalhaPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalendarioPage,
    CalendarioDetalhaPage,
    ConfiguracaoPage,
    PerfilPage,
    HomePage,
    SigninPage,
    SigninEmailPage,
    SignupPage,
    TarefasPage,
    TarefasCadastroPage,
    TarefasDetalhaPage,
    TrabAvaliacao,
    TrabAvaliacaoDetalhaPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
