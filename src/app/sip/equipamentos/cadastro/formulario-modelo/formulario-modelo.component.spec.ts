import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormularioModeloComponent} from './formulario-modelo.component';

describe('FormularioModeloComponent', () => {
  let component: FormularioModeloComponent;
  let fixture: ComponentFixture<FormularioModeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioModeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
