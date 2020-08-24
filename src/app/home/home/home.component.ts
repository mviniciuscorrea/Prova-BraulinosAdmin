import { StatusService } from './../../services/status.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  status: any = null;

  constructor(private serviceStatus: StatusService) { }

  ngOnInit(): void {
    this.serviceStatus.buscarStatus().then(resp => {
      this.status = resp;     
    })
  }

}
