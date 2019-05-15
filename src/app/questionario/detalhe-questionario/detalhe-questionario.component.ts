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
  params = { idadeInicial: '', idadeFinal: '', estado: '', cidade: ''};
  estados: any;
  cidades: any;



  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.questionario = this.route.snapshot.paramMap.get('questionario');
    this.questionarioService.consultarPerguntasDoQuestionario(this.id, this.params)
      .subscribe(pergunta => this.perguntas = pergunta);

    this.questionarioService.retornarEstados().subscribe(estados =>  this.estados = estados);

  }

  pesquisar() {
    this.questionarioService.consultarPerguntasDoQuestionario(this.id, this.params)
      .subscribe(pergunta => this.perguntas = pergunta);
  }

  limpar() {
    this.params.estado = '';
    this.params.cidade = '';
    this.params.idadeFinal = '';
    this.params.idadeInicial = '';
  }

  onChange(estado) {
    this.params.estado = estado;
    this.questionarioService.retornaCidades(this.params.estado)
    .subscribe(cidades => this.cidades = cidades);

  }

}
