import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
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
  clientes : any[] = []
  //clientModel: any

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public apiProvider: ApiProvider,
              public modalCtrl: ModalController) {
  this.getBaseClientes()
  //localStorage.setItem('cliente', this.clientModel)
  }

  // openPage() {
  //   const clients = this.clientes
  //   this.navCtrl.push('EditaClientesPage', {clients: clients})
  // }


  ionViewDidLoad() {
    this.getBaseClientes()
    console.log('ionViewDidLoad ClientesPage');
  }
  
  getBaseClientes() {
    this.apiProvider.getBaseClientes()
        .subscribe((data) => { 
        this.clientes = data.DataSet.Table
        console.log(this.clientes)
        })
  }
}
