import { Http, Headers, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  public data : any
  private apiUrl =  'https://localhost/Primavera.WebAPI/'
  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  getValues() {
    return this.http.get(this.apiUrl+'teste/teste?str=true')
                    .map(data => {
                      return data.json();
                    }); 
  }

  getCompany(){
    let token = localStorage.getItem('token')
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
    headers.append('Authorization', 'Bearer ' + token)
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.apiUrl+'Administrador/ListaEmpresas', options)
                    .map(function(res) {
                    return res.json()
                    }, err =>{
                      alert("failed")
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

  // getBaseClientes(){
  //   let token = localStorage.getItem('token')
  //   let headers = new Headers()
  //   headers.append('Content-Type', 'application/x-www-form-urlencoded')
  //   headers.append('Authorization', 'Bearer ' + token)
  //   let options = new RequestOptions({ headers: headers });

  //   return this.http.get(this.apiUrl+'Base/Clientes/LstClientes', options)
  //                   .map(res => { 
  //                   return res.json()
  //                   }, err =>{
  //                     alert("failed to get Base/Artigos ")
  //                     console.log("ERROR!: ", err);
  //                   }
  //               )
  // }



}

