import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OpcoesService } from './opcao.service';
import { OpcaoComponent } from './opcao.component';

describe('OpcaoComponent', () => {

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpcoesService = TestBed.get(OpcoesService);
    expect(service).toBeTruthy();
  });
});
