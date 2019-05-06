import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { QuestionarioService } from './../questionario.service';

@Component({
  selector: 'app-detalhe-questionario',
  templateUrl: './detalhe-questionario.component.html',
  styleUrls: ['./detalhe-questionario.component.css']
})
export class DetalheQuestionarioComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private questionarioService: QuestionarioService
  ) { }

  id: string;
  questionario: string;
  perguntas: any;
  quantidadeRespostas: any;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.questionario = this.route.snapshot.paramMap.get('questionario');
    this.questionarioService.consultarPerguntasDoQuestionario(this.id)
      .subscribe(pergunta => this.perguntas = pergunta);

  }

}
