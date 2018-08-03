import { Http, Headers, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Platform, NavParams } from 'ionic-angular';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  public data : any
  public apiUrl =  '/api/'
  constructor(public http: Http,
              private platfom: Platform) {
    console.log('Hello ApiProvider Provider');
  
    if(this.platfom.is("cordova")){
    this.apiUrl = "http://localhost/Primavera.WebAPI/"
  }
  }


  getCompany(){
    let token = localStorage.getItem('token')
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
    headers.append('Authorization', 'Bearer ' + token)
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.apiUrl+'Administrador/ListaEmpresas', options)
                    .map(res => { 
                    return res.json()
                    }, err =>{
                      alert("failed to get Administrador/ListaEmpresas ")
                      console.log("ERROR!: ", err);
                    }
                )
  }
  
  getBaseArtigos() {
    let token = localStorage.getItem('token')
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
    headers.append('Authorization', 'Bearer ' + token)
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.apiUrl+'Base/Artigos/LstArtigos', options)
                    .map(res => { 
                    return res.json()
                    }, err =>{
                      alert("failed to get Base/Artigos ")
                      console.log("ERROR!: ", err);
                    }
                )
  }

  getBaseClientes(){
    let token = localStorage.getItem('token')
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
    headers.append('Authorization', 'Bearer ' + token)
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.apiUrl+'Base/Clientes/LstClientes', options)
                    .map(res => { 
                    return res.json()
                    }, err =>{
                      alert("failed to get Base/Clientes ")
                      console.log("ERROR!: ", err);
                    }
                )
  }

  getEditaClientes(){
    let token = localStorage.getItem('token')
    //let cliente = ""//this.navParams.get('clients')
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
    headers.append('Authorization', 'Bearer ' + token)
    let options = new RequestOptions({ headers: headers });
    let numCliente = localStorage.getItem('numCliente')

    return this.http.get(this.apiUrl+'Base/Clientes/Edita/'+numCliente, options)
                    .map(res => { 
                    return res.json()
                    }, err =>{
                      alert("failed to get Base/Clientes/Edita ")
                      console.log("ERROR!: ", err);
                    }
                )
  }

  
  getEditaArtigos(){
    let token = localStorage.getItem('token')
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
    headers.append('Authorization', 'Bearer ' + token)
    let options = new RequestOptions({ headers: headers });
    let numArtigo = localStorage.getItem('numArtigo')

    return this.http.get(this.apiUrl+'Base/Artigos/Edita/'+numArtigo, options)
                    .map(res => { 
                    return res.json()
                    }, err =>{
                      alert("failed to get Base/Artigos ")
                      console.log("ERROR!: ", err);
                    }
                )
  }


}

