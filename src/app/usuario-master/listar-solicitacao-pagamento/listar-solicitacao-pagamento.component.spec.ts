import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSolicitacaoPagamentoComponent } from './listar-solicitacao-pagamento.component';

describe('ListarSolicitacaoPagamentoComponent', () => {
  let component: ListarSolicitacaoPagamentoComponent;
  let fixture: ComponentFixture<ListarSolicitacaoPagamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSolicitacaoPagamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSolicitacaoPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
