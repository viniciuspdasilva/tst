import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantiaDetalhesComponent } from './garantia-detalhes.component';

describe('GarantiaDetalhesComponent', () => {
  let component: GarantiaDetalhesComponent;
  let fixture: ComponentFixture<GarantiaDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarantiaDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarantiaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
