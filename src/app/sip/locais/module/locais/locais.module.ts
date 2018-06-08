import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UnidAdministrativasComponent} from '../../unid-administrativas/unid-administrativas.component';
import {FormularioUnidAdmComponent} from '../../cadastro/formulario-unid-adm/formulario-unid-adm.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UnidAdministrativasComponent,
    FormularioUnidAdmComponent,
  ],
  exports: [
    UnidAdministrativasComponent,
    FormularioUnidAdmComponent,
  ]
})
export class LocaisModule { }
