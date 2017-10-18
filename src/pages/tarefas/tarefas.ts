import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TarefasCadastroPage } from "../tarefas-cadastro/tarefas-cadastro";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { TarefasItem } from '../../models/tarefas-item/tarefas-item.interface';


@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html'
})
export class TarefasPage {
  selectedItem: any;
 
  tarefasItem = { } as TarefasItem;
  
  tarefasItemRef$: FirebaseListObservable<TarefasItem[]>;

  confirma:object = {
    pFeito:  false,
    pHoje: false,
    pAmanha: false,
    pPSemana: false,
    pPMeses:  false,
  };

  constructor(private database: FirebaseListObservable, public navCtrl: NavController, public navParams: NavParams) {  
    this.selectedItem = navParams.get('item');
    this.tarefasItemRef$ = this.database.list('tarefas-list');
   


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
