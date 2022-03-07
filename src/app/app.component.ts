
import { Component, OnInit } from '@angular/core';
import { AlertService } from './service/alert.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(public alertService: AlertService) { }
  jogos: Array<any> = [];
  jogoPRECO: undefined;
  jogoNOME: undefined;
  jogoURL: undefined;
  valida: Boolean = true;
  ngOnInit() { }

  salvarJogo() {
    let jogoObjeto: any = {};
    jogoObjeto.nome = this.jogoNOME;
    jogoObjeto.preco = this.jogoPRECO;
    jogoObjeto.url = this.jogoURL;
    if (this.validarCampos(this.jogoNOME, this.jogoPRECO, this.jogoURL) == false) {
      return;
    } else {
      for (let i = 0; i < this.jogos.length; i++) {
        if (this.jogoNOME == this.jogos[i].nome) {
          this.alertService.error()
          this.limpar();
          return;
        }
      }
    }
    this.jogos.push(jogoObjeto);
    this.limpar();
  }

  limpar() {
    this.jogoNOME = undefined;
    this.jogoPRECO = undefined;
    this.jogoURL = undefined;
  }

  deletar(jogo:any) {
    this.jogos = this.alertService.confirm(jogo, this.jogos)
  }

  validarCampos(nome: any, preco: any, url: any) {
    if (nome == undefined || preco == undefined || url == undefined) {
      this.alertService.dadosVerificador()
      return false;
    } return true
  }
}