import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormularioSolicitacoesComponent} from './formulario-solicitacoes.component';

describe('FormularioSolicitacoesComponent', () => {
  let component: FormularioSolicitacoesComponent;
  let fixture: ComponentFixture<FormularioSolicitacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioSolicitacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioSolicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
