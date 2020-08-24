import { Component, OnInit } from '@angular/core';
import { AgendaService } from './../../services/agenda.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.scss']
})
export class AgendamentosComponent implements OnInit {

  pesquisar = '';
  listaAgendamento: any = [];

  constructor(private serviceAgenda: AgendaService) { }

  ngOnInit(): void {
  }

  pesquisarCliente() {
    if (this.pesquisar != '') {
      this.serviceAgenda.buscarAgendamentoPorCliente(this.pesquisar).then(resp => {
        this.listaAgendamento = resp;
      })
    } else {
      alert('Informe o nome ou id do cliente a ser pesquisado');
    }

  }

  reagendar(agenda) {
    return swal({
      title: "Ooops!",
      text: "Reagendamento ainda não disponível no momento :(",
      icon: "error"
    });

  }

  confirmar(agenda) {
    if (agenda.confirmado) {
      return swal({
        title: "Ooops!",
        text: "Agendamento ja encontra-se como confirmado!",
        timer: 2000,
        icon: "warning"
      });
    }

    swal({
      title: "Confirmar?",
      text: "Aprovar o agendamento?",
      icon: "info",
      buttons: ["Não", "Sim"],
      dangerMode: true,
    }).then((confirma) => {
      if (confirma) {
        this.serviceAgenda.servicoConfirmado(agenda.id).then(() => {
          swal({
            title: "Salvo!",
            text: "Atualizado com sucesso!",
            timer: 2000,
            icon: "success"
          });

          this.pesquisarCliente();
        });
      }
    });
  }

  finalizar(agenda) {
    if (agenda.realizado) {
      return swal({
        title: "Ooops!",
        text: "Agendamento ja encontra-se como realizado!",
        timer: 2000,
        icon: "warning"
      });
    }

    swal({
      title: "Confirmar?",
      text: "Alterar para serviço concluído?",
      icon: "info",
      buttons: ["Não", "Sim"],
      dangerMode: true,
    }).then((confirma) => {
      if (confirma) {
        this.serviceAgenda.servicoRealizado(agenda.id).then(() => {
          swal({
            title: "Salvo!",
            text: "Atualizado com sucesso!",
            timer: 2000,
            icon: "success"
          });

          this.pesquisarCliente();
        });
      }
    });
  }
}
