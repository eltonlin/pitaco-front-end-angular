import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { InteressesService } from './interesses.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Interesses } from './interesses';
import { switchMap  } from 'rxjs/operators';

@Component({
  selector: 'app-interesses',
  templateUrl: './interesses.component.html',
  styleUrls: ['./interesses.component.css']
})
export class InteressesComponent implements OnInit {

  constructor(
    private interessesService: InteressesService,
    private titleService: Title,
    private route: ActivatedRoute
  ) {
    this.titleService.setTitle('Pitaco Interesses');

  }

  interesse: Interesses = new Interesses();

  erro = false;

  sucesso = false;

  errorMessage: string;


  ngOnInit() {
  }


  insertInteresse() {
    this.interessesService.inserir(this.interesse).subscribe(
      result => {
        this.sucesso = true;
        setTimeout(() => {
          this.sucesso = false;
        }, 3000);
        this.interesse.descricao = null;
      },
      error => {
        this.errorMessage = error.error.message;
        this.erro = true;
        setTimeout(() => {
          this.erro = false;
        }, 3000);

      }
    );
  }
}
