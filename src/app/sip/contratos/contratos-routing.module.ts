import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContratosComponent} from './contratos/contratos.component';
import {ProcessosComponent} from './processos/processos.component';
import {FaturasComponent} from './faturas/faturas.component';
import {FormularioContratosComponent} from './cadastro/formulario-contratos/formulario-contratos.component';
import {FormularioProcessosComponent} from './cadastro/formulario-processos/formulario-processos.component';
import {FormularioNotasComponent} from './cadastro/formulario-notas/formulario-notas.component';

const CONTRATOS_ROUTERS: Routes = [
  {path: 'contratos', component: ContratosComponent},
  {path: 'contratos/cadastro', component: FormularioContratosComponent},
  {path: 'processos', component: ProcessosComponent},
  {path: 'processos/cadastro', component: FormularioProcessosComponent},
  {path: 'faturas', component: FaturasComponent},
  {path: 'faturas/cadastro', component: FormularioNotasComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(CONTRATOS_ROUTERS)
  ],
  exports: [
    RouterModule
  ]
})
export class ContratosRoutingModule { }
