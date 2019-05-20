import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OpcoesService } from './opcao.service';

@Component({
  selector: 'app-opcao',
  templateUrl: './opcao.component.html',
  styleUrls: ['./opcao.component.css']
})
export class OpcaoComponent implements OnInit {

  constructor(
    private opcoesService: OpcoesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  id: string;
  opcoes;
  opcao = {
    id_opcao: Number,
    descricao_opcao: String,
    id_pergunta: Number
  }
  errorMessage = String;
  sucesso = false;
  erro = false;
  delete = false;
  update = false;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.listarPerguntas();
  }

  listarPerguntas() {
    this.opcoesService.listarOpcoes(this.id).subscribe(opcoes =>  this.opcoes = opcoes);
  }

  atualizar(res) {
    console.log(res);
    this.opcoesService.atualizar(res).subscribe(
      result => {
        this.sucesso = true;
        setTimeout(() => {
          this.sucesso = false;
        }, 3000);

      },
      error => {
        this.errorMessage = error.error.message;
        this.erro = true;
        setTimeout(() => {
          this.erro = false;
        }, 3000);
      }
    );
    this.update = false;
  }

  deletar(res) {
    console.log(res);
    this.opcoesService.deletarOpcoes(res.id_opcao).subscribe(
      result => {
        this.sucesso = true;
        this.opcoes = this.opcoes.filter(opcao => opcao.id_opcao !== res.id_opcao);
        setTimeout(() => {
          this.sucesso = false;
        }, 3000);

      },
      error => {
        this.errorMessage = error.error.message;
        this.erro = true;
        setTimeout(() => {
          this.erro = false;
        }, 3000);
      }
    );
    this.delete = false;
  }

  apagar(res) {
    this.opcao = res;
    this.delete = true;
  }

  editar(res) {
    this.opcao = res;
    this.update = true;
  }

}
