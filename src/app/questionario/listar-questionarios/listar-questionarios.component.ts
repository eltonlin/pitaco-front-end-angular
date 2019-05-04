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

  questionarios;

  ngOnInit() {
    this.questionarioService.consultarQuestionario().subscribe(questionario => this.questionarios = questionario);
  }

  detalhar(questionario) {
    this.router.navigate(['/home/questionario-detalhe', { id: questionario.id_questionario }]);
  }

}
