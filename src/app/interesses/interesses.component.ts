import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-interesses',
  templateUrl: './interesses.component.html',
  styleUrls: ['./interesses.component.css']
})
export class InteressesComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Pitaco Interesses");

   }
  
  ngOnInit() {
  }

}
