import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrabAvaliacaoDetalhaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-trab-avaliacao-detalha',
  templateUrl: 'trab-avaliacao-detalha.html',
})
export class TrabAvaliacaoDetalhaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrabAvaliacaoDetalhaPage');
  }

}
