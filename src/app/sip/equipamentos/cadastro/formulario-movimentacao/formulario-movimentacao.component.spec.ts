import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormularioMovimentacaoComponent} from './formulario-movimentacao.component';

describe('FormularioMovimentacaoComponent', () => {
  let component: FormularioMovimentacaoComponent;
  let fixture: ComponentFixture<FormularioMovimentacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioMovimentacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioMovimentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
