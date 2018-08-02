import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the ArtigosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-artigos',
  templateUrl: 'artigos.html',
})

export class ArtigosPage {
  artigos : any[] = []

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public apiProvider: ApiProvider) {
  this.getBaseArtigos()
  }
  

  ionViewDidLoad() {
   this.getBaseArtigos()

  }

  // openPage(){
  //   this.navCtrl.push('EditaArtigosPage')
  // }

  // itemSelected(artigo){
  //   this.navCtrl.push('artigosDetalhes', {artigo : artigo})
  // }

  getBaseArtigos() {
    this.apiProvider.getBaseArtigos()
        .subscribe((data) => { 
        this.artigos = data.DataSet.Table
        })
    }
  
}
