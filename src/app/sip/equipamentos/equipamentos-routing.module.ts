import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EquipamentosComponent} from './equipamentos/equipamentos.component';
import {FormularioEquipamentosComponent} from './cadastro/formulario-equipamentos/formulario-equipamentos.component';

const EQUIPAMENTOS_ROUTER: Routes = [
  {path: 'equipamentos', component: EquipamentosComponent},
  {path: 'equipamentos/cadastro', component: FormularioEquipamentosComponent},
  {path: 'tipo', component: EquipamentosComponent},
  {path: 'modelo', component: EquipamentosComponent},
  {path: 'movimentacao', component: EquipamentosComponent},
  {path: 'relatorio', component: EquipamentosComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(EQUIPAMENTOS_ROUTER)
  ],
  exports: [
    RouterModule
  ]
})
export class EquipamentosRoutingModule {}
