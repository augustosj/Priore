import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrabAvaliacaoDetalhaPage } from './trab-avaliacao-detalha';

@NgModule({
  declarations: [
    TrabAvaliacaoDetalhaPage,
  ],
  imports: [
    IonicPageModule.forChild(TrabAvaliacaoDetalhaPage),
  ],
  exports: [
    TrabAvaliacaoDetalhaPage
  ]
})
export class TrabAvaliacaoDetalhaPageModule {}
