import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpSipService} from '../../../../service/api/http-sip.service';
import {Processos} from '../../../../model/contratos/processos';
import {TemplateDataSource} from '../../../../config/TemplateDataSource';
import {UnidAdm} from '../../../../model/locais/unid-adm';
import {MatPaginator} from '@angular/material';
import {Configuration} from '../../../../config/Configuration';

@Component({
  selector: 'app-formulario-processos',
  templateUrl: './formulario-processos.component.html',
  styleUrls: ['./formulario-processos.component.scss']
})
export class FormularioProcessosComponent implements OnInit {

  @ViewChild('origemPaginator') paginatorOrigem: MatPaginator;
  @ViewChild('atualPaginator') paginatorAtual: MatPaginator;

  public origemUnidAdmDataSource: TemplateDataSource<UnidAdm>;

  public tiposLicitacao: any = Processos.TIPOS_LICITACAO;
  public statusProcessos: any = Processos.STATUS_CONTRATOS;

  public columns = UnidAdm.COLUMNS_DATA_CADASTRO;

  processosForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpSipService<any>) {
    this.createForm();
  }

  ngOnInit() {
    this.origemUnidAdmDataSource = new TemplateDataSource<UnidAdm>(this.http,
      Configuration.URLS_SIP_DESENVOLVIMENTO.unidades.base);
    this.origemUnidAdmDataSource.loadRecursosPage();
  }
  private createForm() {
    this.processosForm = this.fb.group({
      numProcesso: [1, Validators.required],
      objProcesso: ['Requid', Validators.required],
      obsProcesso: ['null', Validators.required],
      nrLicitacao: [1, Validators.required],
      tipoLicitacao: [0, Validators.required],
      statusProcesso: [1, Validators.required]
    });
  }

}
