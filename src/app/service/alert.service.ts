import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2'
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor() { }

  public confirm(jogo: any, jogos: any) {
    for (let i = 0; i < jogos.length; i++) {
      if (jogos[i].nome == jogo) {
        Swal.fire({
          title: 'VOCÊ TEM CERTEZA?',
          text: `Você está prestes a deletar o jogo: ${jogo}`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sim',
          cancelButtonText: 'Não'
        }).then((result) => {
          console.log(result)
          if (result.isConfirmed) {
            jogos.splice(i, 1);
            Swal.fire({
              icon: 'success',
              title: 'Jogo deletado com sucesso!',
              showConfirmButton: false,
              timer: 1000
            })
          }
        })
      }
    }
    return jogos
  }

  public dadosVerificador() {
    Swal.fire(
      '',
      '<b>PREENCHA TODOS OS DADOS',
      'info')
  }

  public error() {
    Swal.fire(
      'ERRO',
      '<b>Jogo já cadastrado<b>',
      'error')
  }
}


