import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Pitaco Perguntas');
   }

  ngOnInit() {
  }

}
