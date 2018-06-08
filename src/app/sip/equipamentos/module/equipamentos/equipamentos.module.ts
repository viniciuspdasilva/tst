import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EquipamentosComponent} from '../../equipamentos/equipamentos.component';
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
import {AppRoutingModule} from '../../../../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {HttpClientModule} from '@angular/common/http';
import {FormularioEquipamentosComponent} from '../../cadastro/formulario-equipamentos/formulario-equipamentos.component';
import {FormularioTipoComponent} from '../../cadastro/formulario-tipo/formulario-tipo.component';
import {FormularioModeloComponent} from '../../cadastro/formulario-modelo/formulario-modelo.component';
import {FormularioMovimentacaoComponent} from '../../cadastro/formulario-movimentacao/formulario-movimentacao.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    ReactiveFormsModule
  ],
  declarations: [
    EquipamentosComponent,
    FormularioEquipamentosComponent,
    FormularioModeloComponent,
    FormularioTipoComponent,
    FormularioMovimentacaoComponent,
  ],
  exports: [
    EquipamentosComponent,
    FormularioEquipamentosComponent,
    FormularioModeloComponent,
    FormularioTipoComponent,
    FormularioMovimentacaoComponent,
  ]
})
export class EquipamentosModule { }
