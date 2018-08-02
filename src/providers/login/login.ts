import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {
  private apiUrl =  'http://localhost/Primavera.WebAPI/'
  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
  }

  //Request access token
  login(username, password, company) {
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    // headers.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    // headers.append('Accept', 'application/json');
    let body = 'username='+username+'&password='+password+'&company='+company+'&instance=DEFAULT&grant_type=password';
    
    this.http.post(this.apiUrl+'token', body, options)
                    .map(res => res.json()).subscribe(data =>{
                          localStorage.setItem('token', data.access_token)
                          localStorage.setItem('user', username)
                          localStorage.setItem('pass', password)
                          alert("O token e : " + data.access_token)
                          console.log(data);
                        }, err =>{
                          alert("failed")
                          console.log("ERROR!: ", err);
                        }
                    )

    }



    // //Request access token
    // login(username, password, company) {
    //   let headers = new Headers()
    //   headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //   let options = new RequestOptions({ headers: headers });
    //   // headers.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    //   // headers.append('Accept', 'application/json');
    //   let body = 'username='+username+'&password='+password+'&company='+company+'&instance=DEFAULT&grant_type=password';
      
    //   this.http.post(this.apiUrl+'token', body, options)
    //                   .map(res => res.json()).subscribe(data =>{
    //                         localStorage.setItem('token', data.access_token)
    //                         localStorage.setItem('user', username)
    //                         localStorage.setItem('pass', password)
    //                         alert("O token e : " + data.access_token)
    //                         console.log(data);
    //                       }, err =>{
    //                         alert("failed")
    //                         console.log("ERROR!: ", err);
    //                       }
    //                   )
  
    //   }

}
