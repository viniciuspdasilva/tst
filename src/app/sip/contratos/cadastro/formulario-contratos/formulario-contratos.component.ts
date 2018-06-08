import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpSipService} from '../../../../service/api/http-sip.service';
import {catchError, finalize, tap} from 'rxjs/internal/operators';
import {of} from 'rxjs';
import {Externos} from '../../../../model/atendimentos/externos';
import {Equipamentos} from '../../../../model/equipamentos/equipamentos';
import {TemplateDataSource} from '../../../../config/TemplateDataSource';
import {MatPaginator} from '@angular/material';
import {Configuration} from '../../../../config/Configuration';
import {Fornecedor} from '../../../../model/fornecedores/fornecedor';
import {Garantia} from '../../../../model/fornecedores/garantia';
import {Processos} from '../../../../model/contratos/processos';
import {User} from '../../../../model/usuarios/user';
import {CadastroService} from '../../../srv/cadastro/cadastro.service';
import {Contratos} from '../../../../model/contratos/contratos';
import {MessageService} from 'primeng/components/common/messageservice';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-formulario-contratos',
  templateUrl: './formulario-contratos.component.html',
  styleUrls: ['./formulario-contratos.component.scss']
})
export class FormularioContratosComponent implements OnInit, AfterViewInit {
  /*Paginators*/
  @ViewChild('equipamentosPaginator') paginator: MatPaginator;
  @ViewChild('fornecedoresPaginator') paginatorFornecedores: MatPaginator;
  @ViewChild('garantiasPaginator') paginatorGarantia: MatPaginator;
  @ViewChild('processosPaginator') paginatorProcessos: MatPaginator;
  @ViewChild('gestoresPaginator') paginatorGestores: MatPaginator;
  /*Colunas*/
  columnsEquipamentos: string[] = Equipamentos.COLUMNS_TABLE_CADASTRO;
  columnsAtendimentos: string[] = Externos.COLUMNS_TABLE_CADASTRO;
  columnsFornecedores: string[] = Fornecedor.COLUMNS_DATA_CADASTRO;
  columnsGarantia: string[]     = Garantia.COLUMNS_DATA_CADASTRO;
  columnsProcessos: String[]    = Processos.COLUMNS_TABLE_CADASTRO;
  columnsGestores: String[]     = User.COLUMNS_DATA_CADASTRO;

  contratosForm: FormGroup;
  msg: Message[] = [];

  dataSourceEquipamentos: TemplateDataSource<Equipamentos>;
  dataSourceExternos: TemplateDataSource<Externos>;
  dataSourceFornecedores: TemplateDataSource<Fornecedor>;
  dataSourceGarantia: TemplateDataSource<Garantia>;
  dataSourceProcessos: TemplateDataSource<Processos>;
  dataSourceUsuarios: TemplateDataSource<User>;

  externos: Array<Externos> = [];
  externosData: Array<Externos> = [];
  equipamentos: Array<Equipamentos> = [];
  fornecedores: Array<Fornecedor> = [];
  garantias: Array<Garantia> = [];
  processos: Array<Processos> = [];
  usuarios: Array<User> = [];
  contrato: Contratos = Contratos.factoryContrato();
  constructor(private fb: FormBuilder,
              private http: HttpSipService<any>,
              private cadastro: CadastroService<Contratos>,
              private messageService: MessageService) {
    this.createForm();
  }
  ngOnInit() {
    this.dataSourceExternos = new TemplateDataSource<Externos>(this.http,
      Configuration.URLS_SIP_DESENVOLVIMENTO.externos.base);
    this.dataSourceExternos.loadRecursos();

    this.dataSourceEquipamentos = new TemplateDataSource<Equipamentos>(this.http,
      Configuration.URLS_SIP_DESENVOLVIMENTO.equipamentos.base);
    this.dataSourceEquipamentos.loadRecursosPage();

    this.dataSourceFornecedores = new TemplateDataSource<Fornecedor>(this.http,
      Configuration.URLS_SIP_DESENVOLVIMENTO.fornecedores.page);
    this.dataSourceFornecedores.loadRecursosPage();

    this.dataSourceGarantia = new TemplateDataSource<Garantia>(this.http,
      Configuration.URLS_SIP_DESENVOLVIMENTO.garantia.page);
    this.dataSourceGarantia.loadRecursosPage();

    this.dataSourceProcessos = new TemplateDataSource<Processos>(this.http,
      Configuration.URLS_SIP_DESENVOLVIMENTO.processos.page);
    this.dataSourceProcessos.loadRecursosPage();


    this.dataSourceUsuarios = new TemplateDataSource<User>(this.http,
      Configuration.URLS_SIP_DESENVOLVIMENTO.users.usuarios.page);
    this.dataSourceUsuarios.loadRecursosPage();

    this.http.getRecurso(Configuration.URLS_SIP_DESENVOLVIMENTO.externos.base)
      .pipe(
        catchError(err => of(console.log(err)) ),
        finalize(() => console.log('fim'))
      ).subscribe(
      (atendimentos: any) => {
          this.externos = atendimentos;
        }
    );
  }
  ngAfterViewInit(): void {
    this.paginator.page
      .pipe(
        tap(() => this.lessonPagesRecursos(1))
      )
      .subscribe();
    this.paginatorFornecedores.page
      .pipe(
        tap( () => this.lessonPagesRecursos(2))
      )
      .subscribe();
    this.paginatorGarantia.page
      .pipe(
        tap(() => this.lessonPagesRecursos(3))
      )
      .subscribe();
  }
  private createForm() {
    this.contratosForm = this.fb.group({
      nrContrato: ['1222', Validators.required],
      tipoContrato: ['1', Validators.required],
      tipoManut: ['1', Validators.required],
      dtAssContrato: [new Date(), Validators.required],
      dtInitContrato: [new Date(), Validators.required],
      dtFinContrato: [new Date(), Validators.required],
      drcContrato: [0, Validators.required],
      vlrContrato: [0, Validators.required],
      obsContrato: ['2', Validators.required]
    });
  }
  private lessonPagesRecursos(number: number) {
    switch (number) {
      case 1:
        this.dataSourceEquipamentos.loadRecursosPage(this.paginator.pageIndex,
          this.paginator.pageSize);
        break;
      case 2:
        this.dataSourceFornecedores.loadRecursosPage(this.paginatorFornecedores.pageIndex,
          this.paginatorFornecedores.pageSize);
        break;
      case 3:
        this.dataSourceGarantia.loadRecursosPage(this.paginatorGarantia.pageIndex,
          this.paginatorGarantia.pageSize);
        break;
      default:
        console.error('metodo não implementado');
        break;
    }
  }
  selectRow(res, type: number) {
    switch (type) {
      case 0:
        this.externosData = this.cadastro.addDadosExternos(this.externosData, res);
        break;
      case 1:
        this.equipamentos = this.cadastro.addDadosExternos(this.equipamentos, res);
        break;
      case 3:
        this.fornecedores = this.cadastro.addDadosExternos(this.fornecedores, res);
        break;
      case 4:
        this.garantias = this.cadastro.addDadosExternos(this.garantias, res);
        break;
      case 5:
        this.processos = this.cadastro.addDadosExternos(this.processos, res);
        break;
      case 6:
        this.usuarios = this.cadastro.addDadosExternos(this.usuarios, res);
        break;
      default:
        throw new Error('Metodo não envolvido');
    }
  }
  public enviarForm() {
    this.contrato = this.cadastro.factoryObject(this.contratosForm.value, this.contrato);
    this.contrato.setAttExterno = this.externos;
    this.contrato.setequipamentos = this.equipamentos;
    this.contrato.setidProcessos = this.processos[0];
    this.contrato.setidFornecedor = this.fornecedores[0];
    this.contrato.setidGarantia = this.garantias[0];
    this.contrato.setidServGestor = this.usuarios;
    this.http.salvarRecurso(Configuration.URLS_SIP_DESENVOLVIMENTO.contratos.base, this.contrato)
      .pipe(
        finalize(() => console.log('Envio concluido'))
      ).subscribe(
      (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Contrato cadastrado com sucesso!',
          detail: 'Cadastro concluido com sucesso!'
        });
      }
    );
  }
}
