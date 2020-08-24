import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { _urlBase } from '../../urlservico/url_base';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = _urlBase + 'login/';

  constructor(private http: HttpClient) {
  }

  public login(usuario, senha) {
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'usuario': usuario,
      'senha': senha,
      'perfil': '1',
    });

    return this.http.get(this.url, { headers: header }).toPromise();
  }
}
