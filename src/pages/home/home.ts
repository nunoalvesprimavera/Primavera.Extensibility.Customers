import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { LoginProvider } from '../../providers/login/login';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginForm : FormGroup
  username : AbstractControl
  password : AbstractControl
  user : string 
  pass : string
  company : string = ''

  constructor(public navCtrl: NavController, 
              public apiProvider:ApiProvider,
              public loginProvider:LoginProvider,
              public formBuilder:FormBuilder,
              private toastCtrl : ToastController) {
     
    this.loginForm = this.formBuilder.group({
        username: new FormControl('', Validators.compose([Validators.required, 
                                                          Validators.pattern('[a-zA-Z]*'), 
                                                          Validators.minLength(4), 
                                                          Validators.maxLength(30)])),
        password: new FormControl('', Validators.compose([Validators.required]))
      })

      this.username = this.loginForm.controls['username']
      this.password = this.loginForm.controls['password']
    }
  
  ionViewDidLoad() {
   
  }

  // onSignIn() {
  //   this.logger.info('SignInPage: onSignIn()');
  // }


  login(){
    if(this.loginForm.valid)
    {
      this.loginProvider.login(this.user, this.pass, this.company)
      this.navCtrl.setRoot('CompanyPage')

      let toast = this.toastCtrl.create({
        message: 'Login feito com sucesso',
        duration: 1000,
        position: 'top'
      })
      toast.present()
    }else{
      let toast = this.toastCtrl.create({
        message: 'Login inválido',
        duration: 1000,
        position: 'top'
      })
      toast.present()
    }
  }
}
