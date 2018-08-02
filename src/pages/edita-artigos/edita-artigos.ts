import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the EditaArtigosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edita-artigos',
  templateUrl: 'edita-artigos.html',
})
export class EditaArtigosPage {
  artigos: any[]
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public apiProvider: ApiProvider) {
  }

  editaClientes(){
    this.apiProvider.getEditaArtigos().subscribe(data => {
      console.log(data)
     this.artigos = data
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditaArtigosPage');
  }

}
