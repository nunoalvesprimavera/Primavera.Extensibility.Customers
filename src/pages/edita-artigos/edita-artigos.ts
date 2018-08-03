import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
;
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
  artigos: any[] = []
  teste: any

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public apiProvider: ApiProvider,
              public viewCtrl: ViewController) {
  this.editaArtigos()
  //this.getNumArtigo()
  }

  editaArtigos(){
    this.apiProvider.getEditaArtigos().subscribe(data => {
    console.log(data)
    this.artigos = Array.of(data)
    })
  }

  getNumArtigo(){
    let artigo = this.navParams.get('artigos')
    localStorage.setItem('numArtigo', artigo)
    console.log(artigo);
  }

  atualizaArtigo(){

  }

  closePage(){
    this.viewCtrl.dismiss()
   
  }
  ionViewDidLoad() {
    this.getNumArtigo()
    console.log('ionViewDidLoad EditaArtigosPage');

  }

}
