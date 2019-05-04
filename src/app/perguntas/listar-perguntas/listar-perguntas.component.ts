import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PerguntasService } from '../perguntas.service';

@Component({
  selector: 'app-listar-perguntas',
  templateUrl: './listar-perguntas.component.html',
  styleUrls: ['./listar-perguntas.component.css']
})
export class ListarPerguntasComponent implements OnInit {

  constructor(
    private perguntasService: PerguntasService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  id: string;
  pergunta = {
    id_pergunta: Number,
    descricao_pergunta: String,
    tipo_pergunta: String,
    id_questionario: Number
  };
  errorMessage = String;
  sucesso = false;
  erro = false;
  delete = false;
  update = false;
  perguntas;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.listarPerguntas();
  }

  listarPerguntas() {
    this.perguntasService.listarPergunta(this.id).subscribe(perguntas => this.perguntas = perguntas);
  }

  atualizar(res) {
    console.log(res);
    this.perguntasService.atualizar(res).subscribe(
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
    this.perguntasService.deletarPerguntas(res.id_pergunta).subscribe(
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
    this.delete = false;
    window.location.reload();
  }

  apagar(res) {
    this.pergunta = res;
    this.delete = true;
  }

  editar(res) {
    this.pergunta = res;
    this.update = true;
  }

  opcoes(pergunta) {
    // this.router.navigate(['', { id: pergunta.id_questionario }]);
  }

}
