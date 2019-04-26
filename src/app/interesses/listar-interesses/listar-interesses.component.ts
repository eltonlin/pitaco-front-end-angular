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

  interesses: Interesses;

  ngOnInit() {
    this.listarInteresse();
  }

  listarInteresse() {
    this.interesseService.listarInteresses().subscribe(interesses => this.interesses = interesses);
  }

  editar(interesse: Interesses) {
    this.router.navigate([{ outlets: { main: [ 'interesses' ] }}]);
  }

}
