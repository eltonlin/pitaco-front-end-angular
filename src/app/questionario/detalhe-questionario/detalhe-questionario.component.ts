import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalhe-questionario',
  templateUrl: './detalhe-questionario.component.html',
  styleUrls: ['./detalhe-questionario.component.css']
})
export class DetalheQuestionarioComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id: string;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
