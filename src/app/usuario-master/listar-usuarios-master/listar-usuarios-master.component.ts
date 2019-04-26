import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-listar-usuarios-master',
  templateUrl: './listar-usuarios-master.component.html',
  styleUrls: ['./listar-usuarios-master.component.css']
})
export class ListarUsuariosMasterComponent implements OnInit {

  users: any;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.usuarioService.listarUsuarios().subscribe(usuarios => this.users = usuarios);
  }

}
