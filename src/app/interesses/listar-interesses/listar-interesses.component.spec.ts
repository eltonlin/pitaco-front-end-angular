import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInteressesComponent } from './listar-interesses.component';

describe('ListarInteressesComponent', () => {
  let component: ListarInteressesComponent;
  let fixture: ComponentFixture<ListarInteressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarInteressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarInteressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
