import { TarefasCadastroPage } from './tarefas-cadastro/tarefas-cadastro';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html'
})
export class TarefasPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;


  pFeito:boolean = false;
  pHoje:boolean = true;
  pAmanha:boolean = false;
  pPSemana:boolean = false;
  pPMeses:boolean = false;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {  
    this.selectedItem = navParams.get('item');

  }

  itemTapped(event, item) {
    this.navCtrl.push(TarefasPage, {
      item: item
    });
  }

  onFabClicked(){
    this.navCtrl.push(TarefasCadastroPage);

  }

}
