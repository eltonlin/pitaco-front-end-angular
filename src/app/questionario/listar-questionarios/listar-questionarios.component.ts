import { Component, OnInit } from '@angular/core';
import { QuestionarioService } from './../questionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-questionarios',
  templateUrl: './listar-questionarios.component.html',
  styleUrls: ['./listar-questionarios.component.css']
})
export class ListarQuestionariosComponent implements OnInit {

  constructor(
    private questionarioService: QuestionarioService,
    private router: Router
  ) { }

  questionario = {
    id_questionario: Number,
    descricao_questionario: String,
    pontuacao_questionario: Number,
    login_master: String,
    razao_social: String,
    interesse_descricao: String
  }
  errorMessage = String;
  sucesso = false;
  erro = false;
  delete = false;
  update = false;

  questionarios;

  ngOnInit() {
    this.questionarioService.consultarQuestionario().subscribe(questionario => this.questionarios = questionario);
  }

  detalhar(questionario) {
    this.router.navigate(['/home/questionario-detalhe',
      { id: questionario.id_questionario, questionario: questionario.descricao_questionario }]);
  }

  perguntas(questionario) {
    this.router.navigate(['/home/listar-perguntas', { id: questionario.id_questionario }]);
  }

  atualizar(res) {
    console.log(res);
    this.questionarioService.editarQuestionario(res).subscribe(
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
    console.log(res.id_questionario);
    this.questionarioService.deletarQuestionario(res.id_questionario).subscribe(
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

  editar(res) {
    this.questionario = res;
    this.update = true;
  }

  apagar(res) {
    this.questionario = res;
    this.delete = true;
  }

}
