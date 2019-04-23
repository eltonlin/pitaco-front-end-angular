import { Component, OnInit } from '@angular/core';
import { InteressesService } from '../interesses.service';
import { Interesses } from '../interesses';

@Component({
  selector: 'app-listar-interesses',
  templateUrl: './listar-interesses.component.html',
  styleUrls: ['./listar-interesses.component.css']
})
export class ListarInteressesComponent implements OnInit {

  constructor(private interesseService: InteressesService) { }

  interesses: Interesses;

  ngOnInit() {
    this.listarInteresse();
  }

  listarInteresse(){
    this.interesseService.listarInteresses().subscribe(interesses => this.interesses = interesses);
  }

}
