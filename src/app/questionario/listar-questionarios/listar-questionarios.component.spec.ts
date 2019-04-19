import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarQuestionariosComponent } from './listar-questionarios.component';

describe('ListarQuestionariosComponent', () => {
  let component: ListarQuestionariosComponent;
  let fixture: ComponentFixture<ListarQuestionariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarQuestionariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarQuestionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
