import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UnidAdministrativasComponent} from './unid-administrativas.component';

describe('UnidAdministrativasComponent', () => {
  let component: UnidAdministrativasComponent;
  let fixture: ComponentFixture<UnidAdministrativasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidAdministrativasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidAdministrativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
