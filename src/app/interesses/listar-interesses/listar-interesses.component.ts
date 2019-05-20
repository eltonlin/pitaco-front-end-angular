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
  interesse: Interesses = new Interesses();
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

  atualizar(res) {
    console.log(res);
    this.interesseService.atualizar(res).subscribe(
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
    this.interesseService.deletarInteresses(res).subscribe(
      result => {
        this.sucesso = true;
        this.interesses = this.interesses.filter(interesse => interesse.id_interesse !== res.id_interesse);
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
    this.interesse = res;
    this.delete = true;
  }

  updateFunc(res) {
    this.interesse = res;
    this.update = true;
  }

}
