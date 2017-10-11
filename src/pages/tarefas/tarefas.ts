import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TarefasCadastroPage } from "../tarefas-cadastro/tarefas-cadastro";
import { HttpProvider } from '../../providers/http/http';


@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html'
})
export class TarefasPage {
  selectedItem: any;

  messageList = [];

  confirma:object = {
    pFeito:  false,
    pHoje: false,
    pAmanha: false,
    pPSemana: false,
    pPMeses:  false,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, httpProvider: HttpProvider) {  
    this.selectedItem = navParams.get('item');
    this.buscaTarefas();


  }

  itemTapped(event, item) {
    this.navCtrl.push(TarefasPage, {
      item: item
    });
  }

  onFabClicked(){
    this.navCtrl.push(TarefasCadastroPage);

  }

  buscaTarefas(){
    this.httpProvider.getMessages().subscribe( data => this.messageList = data);

  }


}
