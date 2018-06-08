import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SolicitacoesComponent} from './solicitacoes/solicitacoes/solicitacoes.component';
import {FormularioSolicitacoesComponent} from './cadastro/formulario-solicitacoes/formulario-solicitacoes.component';
import {InternosComponent} from './internos/internos.component';
import {ExternosComponent} from './externos/externos.component';

const SOLICITACOES_ROUTES: Routes = [
  {path: 'atendimentos', component: SolicitacoesComponent},
  {path: 'atendimentos/cadastro', component: FormularioSolicitacoesComponent},
  {path: 'internos', component: InternosComponent},
  {path: 'externos', component: ExternosComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(SOLICITACOES_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class SolicitacoesRoutingModule {

}
