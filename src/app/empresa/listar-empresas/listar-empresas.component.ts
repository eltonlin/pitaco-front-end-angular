import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';
import { Empresas } from '../empresas';

@Component({
  selector: 'app-listar-empresas',
  templateUrl: './listar-empresas.component.html',
  styleUrls: ['./listar-empresas.component.css']
})
export class ListarEmpresasComponent implements OnInit {

  constructor(private empresaService: EmpresaService) { }

  empresas: Empresas[];
  empresa: Empresas = new Empresas();
  erro = false;
  sucesso = false;
  errorMessage: string;
  delete = false;
  update = false;

  ngOnInit() {
    this.listarEmpresas();

  }

  listarEmpresas() {
    this.empresaService.listarEmpresas().subscribe(empresas => this.empresas = empresas);
  }

  atualizarEmpresa(res) {
    this.empresaService.atualizar(res).subscribe(
      () => {
        this.sucesso = true;
        this.empresas = this.empresas.filter(empresa => {
          if (empresa.cnpj === res.cnpj ) {
            empresa.razao_social = res.razao_social;
            empresa.nome_fantasia = res.nome_fantasia;
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

  deletar(res) {
    this.empresaService.deletar(res).subscribe(
      () => {
        this.sucesso = true;
        this.empresas = this.empresas.filter(empresa => empresa.cnpj !== res.cnpj);
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

  apagar(empresa) {
    this.setEmpresa(empresa);
    this.delete = true;
  }

  updateFunc(empresa) {
    this.setEmpresa(empresa);
    this.update = true;
  }

  setEmpresa(empresa) {
    this.empresa.cnpj = empresa.cnpj;
    this.empresa.login_master = empresa.login_master;
    this.empresa.nome_fantasia = empresa.nome_fantasia;
    this.empresa.razao_social = empresa.razao_social;
  }

}
