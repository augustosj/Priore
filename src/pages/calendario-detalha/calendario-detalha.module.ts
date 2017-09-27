import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarioDetalhaPage } from './calendario-detalha';

@NgModule({
  declarations: [
    CalendarioDetalhaPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarioDetalhaPage),
  ],
  exports: [
    CalendarioDetalhaPage
  ]
})
export class CalendarioDetalhaPageModule {}
