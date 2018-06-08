import {AfterViewInit, Component, ErrorHandler, OnInit, ViewChild} from '@angular/core';
import {TemplateDataSource} from '../../../../config/TemplateDataSource';
import {Contratos} from '../../../../model/contratos/contratos';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpSipService} from '../../../../service/api/http-sip.service';
import {catchError, finalize, tap} from 'rxjs/internal/operators';
import {MatPaginator} from '@angular/material';
import {UnidAdm} from '../../../../model/locais/unid-adm';
import {Configuration} from '../../../../config/Configuration';
import {CadastroService} from '../../../srv/cadastro/cadastro.service';
import {Equipamentos} from '../../../../model/equipamentos/equipamentos';
import {Tipo} from '../../../../model/equipamentos/tipo';
import {Modelo} from '../../../../model/equipamentos/modelo';
import {Suprimento} from '../../../../model/equipamentos/suprimento';
import {FormularioEquipamentoService} from './formulario-equipamento.service';

@Component({
  selector: 'app-formulario-equipamentos',
  templateUrl: './formulario-equipamentos.component.html',
  styleUrls: ['./formulario-equipamentos.component.scss'],
  providers: [
    CadastroService,
    FormularioEquipamentoService
  ]
})
export class FormularioEquipamentosComponent implements OnInit, AfterViewInit {
  @ViewChild('contratosPaginator') paginatorContratos: MatPaginator;
  @ViewChild('modelosPaginator') paginatorModelos: MatPaginator;
  @ViewChild('tipoPaginator') paginatorTipo: MatPaginator;
  @ViewChild('suprimentosPaginator') paginatorSuprimentos: MatPaginator;
  @ViewChild('localPaginator') paginatorLocal: MatPaginator;

  unidAdmDataSource: TemplateDataSource<UnidAdm>;
  contratosDataSource: TemplateDataSource<Contratos>;
  modelosDataSource: TemplateDataSource<Modelo>;
  tipoDataSource: TemplateDataSource<Tipo>;
  suprimentosDataSource: TemplateDataSource<Suprimento>;

  unidAdmColumns      = UnidAdm.COLUMNS_DATA_CADASTRO;
  contratosColumns    = Contratos.COLUMNS_TABLE_CADASTRO;
  modelosColumns      = Modelo.COLUMNS_DATA_CADASTRO;
  tipoColumns         = Tipo.COLUMNS_DATA_CADASTRO;
  suprimentosColumns  = Suprimento.COLUMNS_DATA_CADASTRO;

  equipamentosForm: FormGroup;
  myControl: FormControl = new FormControl();

  contratos: Array<any> = [];
  modelos: any;
  suprimentosCount: any = 0;
  source: number;
  equipamentos: Equipamentos = Equipamentos.factoryObject();
  __contratos: Array<Contratos> = [];
  __tipo: Array<Tipo> = [];
  __modelo: Array<Modelo> = [];
  __local: Array<UnidAdm> = [];
  __suprimentos: Array<Suprimento> = [];
  constructor(
    public modelosService: HttpSipService<any>,
    public fb: FormBuilder,
    private formularioService: CadastroService<Equipamentos>) {
    this.createForm();
  }
  ngOnInit() {
    this.unidAdmDataSource = new TemplateDataSource<UnidAdm>(this.modelosService, 'http://localhost:8082/sip/api/locais/unidades/page/');
    this.unidAdmDataSource.loadRecursosPage();

    this.contratosDataSource = new TemplateDataSource<Contratos>(this.modelosService, Configuration.URLS_SIP_DESENVOLVIMENTO.contratos.page);
    this.contratosDataSource.loadRecursosPage();

    this.modelosDataSource = new TemplateDataSource<Modelo>(this.modelosService, Configuration.URLS_SIP_DESENVOLVIMENTO.equipamentos.modelo.page);
    this.modelosDataSource.loadRecursosPage();

    this.tipoDataSource = new TemplateDataSource<Tipo>(this.modelosService, Configuration.URLS_SIP_DESENVOLVIMENTO.equipamentos.tipo.page);
    this.tipoDataSource.loadRecursosPage();

    this.suprimentosDataSource = new TemplateDataSource<Suprimento>(this.modelosService,
      Configuration.URLS_SIP_DESENVOLVIMENTO.equipamentos.suprimentos.page);
    this.suprimentosDataSource.loadRecursosPage();
    this.modelosService.searchRecurso(Configuration.URLS_SIP_DESENVOLVIMENTO.equipamentos.suprimentos.search.count)
      .pipe(
        catchError(err => err),
        finalize(() => console.log('fim'))
      ).subscribe(
        res => {
          this.suprimentosCount = res;
          console.log(res);
        }
    );
  }
  ngAfterViewInit(): void {
    this.paginatorContratos.page
      .pipe(
        tap(() => this.loadLessonsPage(0))
      )
      .subscribe();
    this.paginatorModelos.page
      .pipe(
        tap(() => this.loadLessonsPage(1))
      )
      .subscribe();
    this.paginatorTipo.page
      .pipe(
        tap(() => this.loadLessonsPage(2))
      )
      .subscribe();
    this.paginatorSuprimentos.page
      .pipe(
        tap(() => this.loadLessonsPage(3))
      )
      .subscribe();
    this.paginatorLocal.page
      .pipe(
        tap(() => this.loadLessonsPage(4))
      )
      .subscribe();
  }
  private loadLessonsPage(type: number) {
    switch (type) {
      case 0:
        this.contratosDataSource.loadRecursosPage(this.paginatorContratos.pageIndex, this.paginatorContratos.pageSize);
        break;
      case 1:
        this.modelosDataSource.loadRecursosPage(this.paginatorModelos.pageIndex, this.paginatorModelos.pageSize);
        break;
      case 2:
        this.tipoDataSource.loadRecursosPage(this.paginatorTipo.pageIndex, this.paginatorTipo.pageSize);
        break;
      case 3:
        this.suprimentosDataSource.loadRecursosPage(this.paginatorSuprimentos.pageIndex, this.paginatorSuprimentos.pageSize);
        break;
      case 4:
        this.unidAdmDataSource.loadRecursosPage(this.paginatorLocal.pageIndex, this.paginatorLocal.pageSize);
        break;
    }
  }
  private createForm() {
    this.equipamentosForm = this.fb.group({
      numGrupo: [-1, Validators.required],
      nomeEquip: [-1, Validators.required],
      numTombamento: ['', Validators.required],
      numSerie: ['', Validators.required],
      tipoAquisicao: [-1, Validators.required],
      isActivo: [true, Validators.required],
      obsInativo: ['Não inativo', Validators.required],
      dtInativo: ['Não Ativo', Validators.required],
      dttMov: [new Date(11111), Validators.required],
      isCritico: [true, Validators.required],
      obsEqp: ['', Validators.required],
    });
  }
  public selectRow(row: any, type: number) {
    switch (type) {
      case 0:
        this.__contratos = this.formularioService.addDadosExternos(this.__contratos, row);
        break;
      case 1:
        this.__modelo = this.formularioService.addDadosExternos(this.__modelo, row);
        break;
      case 2:
        this.__tipo = this.formularioService.addDadosExternos(this.__tipo, row);
        break;
      case 4:
        this.__local = this.formularioService.addDadosExternos(this.__local, row);
        break;
      case 3:
        this.__suprimentos = this.formularioService.addDadosExternos(this.__suprimentos, row);
        break;
      default:
        throw new ErrorHandler().handleError({type: 'Client Side', status: 0, message: 'Opção escolhida não existe!'});
    }
  }
  public columnsOfObject(array: any[]): Array<string> {
    return this.formularioService.pegarColunasObject(array);
  }

  public saveEquipamento() {
    this.equipamentos = this.formularioService.factoryObject(this.equipamentosForm.value, this.equipamentos);
    this.equipamentos.setCodModelo = this.__modelo[0];
    this.equipamentos.setCodTipo = this.__tipo[0];
    this.equipamentos.setIdContrato = this.__contratos[0];
    this.equipamentos.setIdLocal = this.__local[0];
    this.equipamentos.setIdSuprimentos = this.__suprimentos;
    this.equipamentos.setDtInativo = 'Aparelho Ativo';
    this.modelosService.salvarRecurso(Configuration.URLS_SIP_DESENVOLVIMENTO.equipamentos.base, this.equipamentos)
      .pipe(
        catchError(err => err),
        finalize(() => console.log('Salvo com sucesso  '))
      )
      .subscribe(
        res => {
          console.log(res);
        }
      );
  }
}
