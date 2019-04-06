import { Component, OnInit } from '@angular/core';
import { UsuarioMaster } from './../login/usuarioMaster';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarioNome: string;

  constructor() { }

  ngOnInit() {
    this.usuarioNome = window.localStorage.getItem('user');
  }

}
