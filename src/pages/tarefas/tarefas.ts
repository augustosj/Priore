import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TarefasCadastroPage } from "../tarefas-cadastro/tarefas-cadastro";

@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html'
})
export class TarefasPage {
  selectedItem: any;


  confirma:object = {
    pFeito:  false,
    pHoje: false,
    pAmanha: false,
    pPSemana: false,
    pPMeses:  false,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {  
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

    
    //this.confirma = this.conexaoBanco();
    /*
    if(this.confirma.pFeito){
      this.confirma.pFeito = true;
    }
    if(this.confirma.pHoje){
      this.pHoje = true;
    }
    if(this.confirma.pAmanha){
      this.pAmanha = true;
    }
    if(this.confirma.pPSemana){
      this.pPSemana = true;
    }
    if(this.confirma.pPMeses){
      this.pPMeses = true;
    }
    */
    

  }


}
