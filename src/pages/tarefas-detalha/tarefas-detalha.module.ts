import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TarefasDetalhaPage } from './tarefas-detalha';

@NgModule({
  declarations: [
    TarefasDetalhaPage,
  ],
  imports: [
    IonicPageModule.forChild(TarefasDetalhaPage),
  ],
  exports: [
    TarefasDetalhaPage
  ]
})
export class TarefasDetalhaPageModule {}
