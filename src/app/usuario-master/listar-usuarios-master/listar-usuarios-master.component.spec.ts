import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUsuariosMasterComponent } from './listar-usuarios-master.component';

describe('ListarUsuariosMasterComponent', () => {
  let component: ListarUsuariosMasterComponent;
  let fixture: ComponentFixture<ListarUsuariosMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarUsuariosMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUsuariosMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
