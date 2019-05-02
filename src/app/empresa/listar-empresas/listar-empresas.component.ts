import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-listar-empresas',
  templateUrl: './listar-empresas.component.html',
  styleUrls: ['./listar-empresas.component.css']
})
export class ListarEmpresasComponent implements OnInit {

  constructor(private empresaService: EmpresaService) { }

  empresas: any;
  empresa = {
    razao_social: String,
    nome_fantasia: String,
    cnpj: String,
    login_master: String,
  }
  erro = false;
  sucesso = false;
  errorMessage: string;
  delete = false;
  update = false;

  ngOnInit() {
    this.listarEmpresas();

  }

  listarEmpresas() {
    this.empresaService.listarEmpresas().subscribe(empresas => { this.empresas = empresas; console.log(this.empresas); });
  }

  atualizarEmpresa(res) {
    console.log(res);
    this.empresaService.atualizar(res).subscribe(
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
    this.empresaService.deletar(res).subscribe(
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
    this.empresa = res;
    this.delete = true;
  }

  updateFunc(res) {
    this.empresa = res;
    this.update = true;
  }

}
