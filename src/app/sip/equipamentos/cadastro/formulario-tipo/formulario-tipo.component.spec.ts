import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormularioTipoComponent} from './formulario-tipo.component';

describe('FormularioTipoComponent', () => {
  let component: FormularioTipoComponent;
  let fixture: ComponentFixture<FormularioTipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioTipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
