import { Component, OnInit } from '@angular/core';
import { InteressesService } from '../interesses.service';
import { Interesses } from '../interesses';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-interesses',
  templateUrl: './listar-interesses.component.html',
  styleUrls: ['./listar-interesses.component.css']
})
export class ListarInteressesComponent implements OnInit {

  constructor(
    private interesseService: InteressesService,
    private router: Router
  ) { }

  interesses: Interesses[];
  interesseParaAtualizar: Interesses = new Interesses();
  errorMessage = String;
  sucesso = false;
  erro = false;
  delete = false;
  update = false;

  ngOnInit() {
    this.listarInteresse();
  }

  listarInteresse() {
    this.interesseService.listarInteresses().subscribe(interesses => this.interesses = interesses);
  }

  atualizar() {
    this.interesseService.atualizar(this.interesseParaAtualizar).subscribe(
      result => {
        this.sucesso = true;
        this.interesses.filter(interesse => {
          if ( this.interesseParaAtualizar.id_interesse === interesse.id_interesse ) {
            interesse.descricao = this.interesseParaAtualizar.descricao;
          }
        });
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

  deletar() {
    this.interesseService.deletarInteresses(this.interesseParaAtualizar).subscribe(
      result => {
        this.sucesso = true;
        this.interesses = this.interesses.filter(interesse => interesse.id_interesse !== this.interesseParaAtualizar.id_interesse);
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

  apagar(interesse: Interesses) {
    this.interesseParaAtualizar.id_interesse = interesse.id_interesse;
    this.interesseParaAtualizar.descricao = interesse.descricao;
    this.delete = true;
  }

  updateFunc(interesse: Interesses) {
    this.interesseParaAtualizar.id_interesse = interesse.id_interesse;
    this.interesseParaAtualizar.descricao = interesse.descricao;
    this.update = true;
  }

}
