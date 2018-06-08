import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContratosComponent} from '../../contratos/contratos.component';
import {FaturasComponent} from '../../faturas/faturas.component';
import {ProcessosComponent} from '../../processos/processos.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {
  ErrorStateMatcher,
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
  MatTreeModule,
  ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import {AppRoutingModule} from '../../../../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormularioContratosComponent} from '../../cadastro/formulario-contratos/formulario-contratos.component';
import {FormularioNotasComponent} from '../../cadastro/formulario-notas/formulario-notas.component';
import {FormularioProcessosComponent} from '../../cadastro/formulario-processos/formulario-processos.component';
import {CadastroService} from '../../../srv/cadastro/cadastro.service';
import {GrowlModule} from 'primeng/growl';
import {MessageService} from 'primeng/components/common/messageservice';
import {SidebarModule} from 'primeng/sidebar';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {FornecedorDetalhesComponent} from '../../../fornecedor/fornecedor-detalhes/fornecedor-detalhes.component';
import {GarantiaDetalhesComponent} from '../../../fornecedor/garantia-detalhes/garantia-detalhes.component';
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
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
    FormsModule,
    ReactiveFormsModule,
    GrowlModule,
    SidebarModule,
    DialogModule,
    ButtonModule

],
  declarations: [
    ContratosComponent,
    FaturasComponent,
    ProcessosComponent,
    FormularioContratosComponent,
    FormularioNotasComponent,
    FormularioProcessosComponent,
    FornecedorDetalhesComponent,
    GarantiaDetalhesComponent
  ],
  exports: [
    ContratosComponent,
    FaturasComponent,
    ProcessosComponent,
    FormularioContratosComponent,
    FormularioNotasComponent,
    FormularioProcessosComponent,
    FornecedorDetalhesComponent,
    GarantiaDetalhesComponent
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    CadastroService,
    MessageService
  ]
})
export class ContratosModule { }
