import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EmpresaService } from './empresa.service';
import { Empresas } from './empresas';
@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  constructor(

    private empresasService: EmpresaService,
    private titleService: Title

  ) {
    this.titleService.setTitle('Pitaco Empresa');

  }
  empresa: Empresas = new Empresas();

  erro = false;

  sucesso = false;

  errorMessage: string;


  ngOnInit() {
    this.empresa.login_master = window.localStorage.getItem('login_master');
  }

  insertEmpresa() {
    this.empresasService.inserir(this.empresa).subscribe(
      result => {
        this.sucesso = true;
        setTimeout(() => {
          this.sucesso = false;
        }, 3000);
        this.empresa.cnpj = null;
        this.empresa.nome_fantasia = null;
        this.empresa.razao_social = null;
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

