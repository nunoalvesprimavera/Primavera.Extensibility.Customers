import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the EditaClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edita-clientes',
  templateUrl: 'edita-clientes.html',
})
export class EditaClientesPage {
  clientes: any[] = []

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public apiProvider: ApiProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditaClientesPage');
    this.editaClientes()
  }

  editaClientes(){
    this.apiProvider.getEditaClientes().subscribe(data => {
    console.log(data)
    this.clientes = Array.of(data)
    })
  }

  getNumCliente(){
    let cliente = this.navParams.get('clientes')
    localStorage.setItem('numCliente', cliente)
    console.log(cliente);
  }

  atualizaCliente(){

  }

  closePage(){
    this.viewCtrl.dismiss()
  }

}
