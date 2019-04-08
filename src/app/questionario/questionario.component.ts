import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Pitaco Questionário");

   }

  ngOnInit() {
  }

}
