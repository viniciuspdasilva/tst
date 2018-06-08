import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormularioRtaComponent} from './formulario-rta.component';

describe('FormularioRtaComponent', () => {
  let component: FormularioRtaComponent;
  let fixture: ComponentFixture<FormularioRtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioRtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
