import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormularioEquipamentosComponent} from './formulario-equipamentos.component';

describe('FormularioEquipamentosComponent', () => {
  let component: FormularioEquipamentosComponent;
  let fixture: ComponentFixture<FormularioEquipamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioEquipamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEquipamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
