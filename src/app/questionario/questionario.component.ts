import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { InteresseService } from './../interesses/interesse.service';
import { EmpresaService } from '../empresa/empresa.service';
import { Empresas } from './../empresa/empresas';
import { Interesses } from './../interesses/interesses';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {

  constructor(
    private titleService: Title,
    private interesseService: InteresseService,
    private empresaService: EmpresaService
  ) {
    this.titleService.setTitle('Pitaco Questionário');
   }

  empresas: Empresas;

  interesses: Interesses;

  ngOnInit() {
    this.interesseService.listarInteresses()
      .subscribe(interesses => this.interesses = interesses);

    this.empresaService.listarEmpresas()
      .subscribe(empresas => this.empresas = empresas);
  }

}
