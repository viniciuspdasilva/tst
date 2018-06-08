import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {LocaisModule} from './sip/locais/module/locais/locais.module';
import {UsuariosModule} from './sip/usuarios/module/usuarios/usuarios.module';
import {EquipamentosModule} from './sip/equipamentos/module/equipamentos/equipamentos.module';
import {FornecedoresModule} from './sip/fornecedores/module/fornecedores/fornecedores.module';
import {ContratosModule} from './sip/contratos/module/contratos/contratos.module';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {HomeComponent} from './sip/home/home/home.component';
import {HttpSipService} from './service/api/http-sip.service';
import {TemplateModelComponent} from './config/modal/TemplateModelComponent';
import {MaskDirective} from './diretivas/mask/mask.directive';
import {TableComponent} from './componentes/table/table.component';
import {GlobalErrorHandlerService} from './service/exceptions/global-error-handler.service';
import {CalendarModule} from 'angular-calendar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ContratosRoutingModule} from './sip/contratos/contratos-routing.module';
import {SolicitacoesRoutingModule} from './sip/atendimentos/solicitacoes-routing.module';
import {EquipamentosRoutingModule} from './sip/equipamentos/equipamentos-routing.module';
import {AtendimentosModule} from './sip/atendimentos/modules/atendimentos/atendimentos.module';
import {SidebarModule} from 'primeng/primeng';
import { FornecedorDetalhesComponent } from './sip/fornecedor/fornecedor-detalhes/fornecedor-detalhes.component';
import { GarantiaDetalhesComponent } from './sip/fornecedor/garantia-detalhes/garantia-detalhes.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginService} from './login/login.service';
import {AuthGuardService} from './login/guards/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateModelComponent,
    MaskDirective,
    TableComponent,
    LoginComponent
  ],
  entryComponents: [
    TemplateModelComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SolicitacoesRoutingModule,
    ContratosRoutingModule,
    EquipamentosRoutingModule,
    HttpClientModule,
    AtendimentosModule,
    EquipamentosModule,
    FornecedoresModule,
    ContratosModule,
    LocaisModule,
    UsuariosModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    NgbModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    SidebarModule
  ],
  exports: [
    HomeComponent,
    TemplateModelComponent,
    MaskDirective,
    TableComponent
  ],
  providers: [
    HttpSipService,
    LoginService,
    AuthGuardService,
    GlobalErrorHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
