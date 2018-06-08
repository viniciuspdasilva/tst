import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormularioServidoresComponent} from './formulario-servidores.component';

describe('FormularioServidoresComponent', () => {
  let component: FormularioServidoresComponent;
  let fixture: ComponentFixture<FormularioServidoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioServidoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioServidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
