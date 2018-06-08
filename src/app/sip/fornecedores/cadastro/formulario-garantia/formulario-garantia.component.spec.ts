import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormularioGarantiaComponent} from './formulario-garantia.component';

describe('FormularioGarantiaComponent', () => {
  let component: FormularioGarantiaComponent;
  let fixture: ComponentFixture<FormularioGarantiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioGarantiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioGarantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
