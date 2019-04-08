import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioMasterComponent } from './usuario-master.component';

describe('UsuarioMasterComponent', () => {
  let component: UsuarioMasterComponent;
  let fixture: ComponentFixture<UsuarioMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
