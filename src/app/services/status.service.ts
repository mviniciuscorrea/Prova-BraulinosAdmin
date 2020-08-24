import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { _urlBase } from '../../urlservico/url_base';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  url = _urlBase + 'status/';

  constructor(private http: HttpClient) { }

  public buscarStatus() {
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    return this.http.get(this.url, { headers: header }).toPromise();
  }

}
