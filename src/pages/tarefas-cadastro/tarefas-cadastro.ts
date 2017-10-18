import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';


import { TarefasItem } from '../../models/tarefas-item/tarefas-item.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component ({
    selector: 'tarefas-cadastro',
    templateUrl: 'tarefas-cadastro.html'
})
export class TarefasCadastroPage{

    tarefasItem = { } as TarefasItem
    
    tarefasItemRef$: FirebaseListObservable<TarefasItem[]>;

    public event = {
        month: '2018-05-01',
        timeStarts: '07:43',
        timeEnds: '1990-02-20'
        
    }
    
    constructor( private database: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController){
        
    }

    callCadastro(tarefasItem: TarefasItem){
        
        console.log(tarefasItem);

    }

}