import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAjudaComponent } from './header-ajuda.component';

describe('HeaderAjudaComponent', () => {
  let component: HeaderAjudaComponent;
  let fixture: ComponentFixture<HeaderAjudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAjudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAjudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
