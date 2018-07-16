import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FornecedoresComponent} from './fornecedores/fornecedores.component';
import {FormularioFornecedoresComponent} from './cadastro/formulario-fornecedores/formulario-fornecedores.component';

const FORNECEDORES_ROUTES: Routes = [
  {path: 'fornecedores', component: FornecedoresComponent},
  {path: 'fonecedores/cadastro', component: FormularioFornecedoresComponent},
  {path: 'fornecedores/relatorio', component: FornecedoresComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FORNECEDORES_ROUTES)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class FornecedoresRoutingModule { }
