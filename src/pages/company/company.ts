import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { LoginProvider } from '../../providers/login/login';
import { Observable } from '../../../node_modules/rxjs/Observable';
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
              public loginProvider:LoginProvider) {
  this.getCompany()
  }

  getCompany(){
    this.apiProvider.getCompany()
        .subscribe(data =>{ this.companies = data})
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyPage');
  }

  login(){
    let username = localStorage.getItem('user')
    let password = localStorage.getItem('pass')
    this.loginProvider.login(username, password, this.companyModel)
    alert("o login e :" + username + password +  this.companyModel)
    this.navCtrl.setRoot('MenuPage')
  }

  // getEnterprises(){
  //   this.apiProvider.getEnterprises()
  // }

}
