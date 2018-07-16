import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InternosComponent} from '../../internos/internos.component';
import {ExternosComponent} from '../../externos/externos.component';
import {SolicitacoesComponent} from '../../solicitacoes/solicitacoes/solicitacoes.component';
import {MatCardModule} from '@angular/material/card';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
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
  MatTreeModule
} from '@angular/material';
import {ChartsModule} from 'ng4-charts/ng4-charts';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';
import {CalendarModule} from 'angular-calendar';
import {FormularioSolicitacoesComponent} from '../../cadastro/formulario-solicitacoes/formulario-solicitacoes.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ScheduleModule} from 'primeng/schedule';
import {PieComponent} from '../../../../componentes/graficos/pie/pie.component';
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    ChartsModule,
    Ng2GoogleChartsModule,
    NgbModule,
    CalendarModule,
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
    ScheduleModule,
    ChartsModule
  ],
  declarations: [
    InternosComponent,
    ExternosComponent,
    SolicitacoesComponent,
    FormularioSolicitacoesComponent,
    PieComponent
  ],
  exports: [
    FormularioSolicitacoesComponent,
    InternosComponent,
    ExternosComponent,
    SolicitacoesComponent
  ]
})
export class AtendimentosModule { }
