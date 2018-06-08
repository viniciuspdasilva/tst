import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormularioProcessosComponent} from './formulario-processos.component';

describe('FormularioProcessosComponent', () => {
  let component: FormularioProcessosComponent;
  let fixture: ComponentFixture<FormularioProcessosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioProcessosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioProcessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
