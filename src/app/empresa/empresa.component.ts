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


  ngOnInit() {

  }

  insertEmpresa() {
    console.log(this.empresa);
    this.empresasService.inserir(this.empresa).subscribe(
      result => {
        this.sucesso = true;
        setTimeout(() => {
          this.sucesso = false;
        }, 3000);

      },
      error => {
        this.erro = true;
        setTimeout(() => {
          this.erro = false;
        }, 3000);

      }
    );
  }
}

