import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPerguntasComponent } from './listar-perguntas.component';

describe('ListarPerguntasComponent', () => {
  let component: ListarPerguntasComponent;
  let fixture: ComponentFixture<ListarPerguntasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPerguntasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPerguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
