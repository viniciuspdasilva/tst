import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormularioFornecedoresComponent} from './formulario-fornecedores.component';

describe('FormularioFornecedoresComponent', () => {
  let component: FormularioFornecedoresComponent;
  let fixture: ComponentFixture<FormularioFornecedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioFornecedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioFornecedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
