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


  ngOnInit() {
    this.listarEmpresas();

  }

  listarEmpresas() {
    this.empresaService.listarEmpresas().subscribe(empresas => {this.empresas = empresas; console.log(this.empresas); });
  }

}
