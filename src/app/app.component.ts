
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  jogos: Array<any> = [];
  jogoPRECO: undefined; 
  jogoNOME: undefined;
  jogoURL: undefined;
  valida: Boolean = true;
  ngOnInit() {}

  salvarJogo() {
    let jogoObjeto: any = {};
    jogoObjeto.nome = this.jogoNOME;
    jogoObjeto.preco = this.jogoPRECO;
    jogoObjeto.url = this.jogoURL;
    this.validarCampos(this.jogoNOME, this.jogoPRECO, this.jogoURL);
    if (this.valida == false) {
      this.valida = true;
      return;
    } else {
      for (let i = 0; i < this.jogos.length; i++) {
        if (this.jogoNOME == this.jogos[i].nome) {
          alert('Jogo já cadastrado');
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
    for (let i = 0; i < this.jogos.length; i++) {
      if (this.jogos[i].nome == jogo) {
        let confimar = confirm(`Você tem certeza que deseja deletar ${jogo}?`);
        if (confimar == true) {
          this.jogos.splice(i, 1);
          this.limpar();
        }
      }
    }
  }
  
  validarCampos(nome:any, preco:any, url:any) {
    if (nome == undefined || preco == undefined || url == undefined) {
      alert('Por favor preencha todos os dados.');
      return (this.valida = false);
    } return
  }
}