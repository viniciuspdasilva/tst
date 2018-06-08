import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormularioContratosComponent} from './formulario-contratos.component';

describe('FormularioContratosComponent', () => {
  let component: FormularioContratosComponent;
  let fixture: ComponentFixture<FormularioContratosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioContratosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
