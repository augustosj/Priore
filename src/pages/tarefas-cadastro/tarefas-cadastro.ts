import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Component ({
    selector: 'tarefas-cadastro',
    templateUrl: 'tarefas-cadastro.html'
})
export class TarefasCadastroPage{

    array = [];
    

    public event = {
        month: '2018-05-01',
        timeStarts: '07:43',
        timeEnds: '1990-02-20'
        
    }
    
    constructor( private fdb: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController){
        this.fdb.list('/tarefas/').subscribe(_data => {
            this.array = _data;
            console.log(this.array);
        });
    }

    callCadastro(){
        let alert = this.alertCtrl.create({
            title: 'Você está tentando cadastrar uma tarefa',
            subTitle: 'Alerta implementado por falta de conexão com o banco',
            buttons: ['OK']
        });

        alert.present();

    }

}