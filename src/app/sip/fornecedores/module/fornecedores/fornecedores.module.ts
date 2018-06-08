import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FornecedoresComponent} from '../../fornecedores/fornecedores.component';
import {FormularioFornecedoresComponent} from '../../cadastro/formulario-fornecedores/formulario-fornecedores.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FornecedoresComponent,
    FormularioFornecedoresComponent
  ],
  exports: [
    FormularioFornecedoresComponent
  ]
})
export class FornecedoresModule { }
