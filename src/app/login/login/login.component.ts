import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = "";
  pass = "";

  constructor(private router: Router,
    private serviceLogin: LoginService) { }

  ngOnInit(): void {
  }

  login() {
    if ((this.user == '') || (this.pass == '')) {
      alert('Informe um usuário e senha');
      return;
    }

    this.serviceLogin.login(this.user, this.pass).then(() => {
      this.router.navigate(['/home']);
    }).catch((err) => {
      if (err.status == 401) {
        alert('Usuário e senha inválidos')
      }
    });
  }

}
