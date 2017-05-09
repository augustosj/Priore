import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component ({
    selector: 'tarefas-cadastro',
    templateUrl: 'tarefas-cadastro.html'
})
export class TarefasCadastroPage{

    

    public event = {
        month: '2018-05-01',
        timeStarts: '07:43',
        timeEnds: '1990-02-20'
    }
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController){

    }

    callCadastro(){
        let alert = this.alertCtrl.create({
            title: 'Você está tentando cadastrar uma tarefa',
            subTitle: 'Alerta implementado por falta de conecção com o banco',
            buttons: ['OK']
        });

        alert.present();

    }

}