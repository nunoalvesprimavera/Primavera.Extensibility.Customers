import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { LoginProvider } from '../../providers/login/login';
/**
 * Generated class for the CompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-company',
  templateUrl: 'company.html',
})

export class CompanyPage {
  companies : any
  companyModel : any

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public apiProvider:ApiProvider,
              public loginProvider:LoginProvider,
              public menu: MenuController){
  menu.enable(true)
  }

  getCompany(){
    this.apiProvider.getCompany()
        .subscribe(data =>{ this.companies =  data
        console.log(data)
        })
    }

  ionViewDidLoad() {
    this.getCompany()
    console.log('ionViewDidLoad CompanyPage');
  }

  login(){
    let username = localStorage.getItem('user')
    let password = localStorage.getItem('pass')
    this.loginProvider.login(username, password, this.companyModel)
    alert("o login e :" + username + password +  this.companyModel)
    this.navCtrl.setRoot('MenuPage')
  }
}
