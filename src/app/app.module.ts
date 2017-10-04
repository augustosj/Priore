import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TarefasPage } from '../pages/tarefas/tarefas';
import { TrabAvaliacao } from './../pages/trab-avaliacao/trab-avaliacao';
import { TarefasCadastroPage } from "../pages/tarefas-cadastro/tarefas-cadastro";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CalendarioPage } from '../pages/calendario/calendario';
import { CalendarioDetalhaPage } from '../pages/calendario-detalha/calendario-detalha';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { PerfilPage } from '../pages/perfil/perfil';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { TarefasDetalhaPage } from '../pages/tarefas-detalha/tarefas-detalha';
import { TrabAvaliacaoDetalhaPage } from '../pages/trab-avaliacao-detalha/trab-avaliacao-detalha';
import { AuthService } from '../providers/auth-service/auth-service';
import { ContactService } from '../providers/contact-service/contact-service';
import { SigninEmailPage } from '../pages/signin-email/signin-email';


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
    IonicModule.forRoot(MyApp)

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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    ContactService
  ]
})
export class AppModule {}
