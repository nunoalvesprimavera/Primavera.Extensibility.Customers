import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
/**
 * Generated class for the ClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {
  clientes : any

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public apiProvider: ApiProvider) {
  // this.getBaseClientes()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientesPage');
  }
  
  // getBaseArtigos() {
  //   this.apiProvider.getBaseClientes()
  //       .subscribe((data) => { 
  //       this.clientes = data.DataSet.Table
  //       })
  // }
}
