import { AgendamentosComponent } from './agendamentos/agendamentos/agendamentos.component';
import { HomeComponent } from './home/home/home.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  {
    path: '',
    component: NavBarComponent,
    children: [
      { path: 'home', component: HomeComponent },      
      { path: 'agendamentos', component: AgendamentosComponent },           
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
