import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { _urlBase } from '../../urlservico/url_base';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  url = _urlBase + 'agendas/';

  constructor(private http: HttpClient) { }

  public buscarAgendamentoPorCliente(pesquisar) {
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'pesquisar': pesquisar,      
    });

    return this.http.get(this.url + 'completo', { headers: header }).toPromise();
  }

  public servicoRealizado(id_agenda) {
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',    
    });

    return this.http.put(this.url + 'realizado/' + id_agenda, { headers: header }).toPromise();
  }

  public servicoConfirmado(id_agenda) {
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',    
    });

    return this.http.put(this.url + 'confirmar/' + id_agenda, { headers: header }).toPromise();
  }
}
