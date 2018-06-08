import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormularioUnidAdmComponent} from './formulario-unid-adm.component';

describe('FormularioUnidAdmComponent', () => {
  let component: FormularioUnidAdmComponent;
  let fixture: ComponentFixture<FormularioUnidAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioUnidAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioUnidAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
