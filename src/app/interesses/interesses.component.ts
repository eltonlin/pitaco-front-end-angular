import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { InteressesService } from './interesses.service';
import { Router } from '@angular/router';
import { Interesses } from './interesses';

@Component({
  selector: 'app-interesses',
  templateUrl: './interesses.component.html',
  styleUrls: ['./interesses.component.css']
})
export class InteressesComponent implements OnInit {

  constructor(
    private interessesService: InteressesService,
    private titleService: Title
  ) {
    this.titleService.setTitle("Pitaco Interesses");

   }

  interesse: Interesses = new Interesses(); 
   
  erro: boolean = false;


  ngOnInit() {
  }
  sucesso: boolean = false;

  insertInteresse(){
    console.log(this.interesse);
  this.interessesService.inserir(this.interesse).subscribe(
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
  )
  }
}
