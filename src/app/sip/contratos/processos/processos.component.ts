import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TemplateDataSource} from '../../../config/TemplateDataSource';
import {Processos} from '../../../model/contratos/processos';
import {MatPaginator} from '@angular/material';
import {HttpSipService} from '../../../service/api/http-sip.service';
import {Configuration} from '../../../config/Configuration';
import {tap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.scss']
})
export class ProcessosComponent implements OnInit, AfterViewInit{

  @ViewChild(MatPaginator) page: MatPaginator;
  public data: TemplateDataSource<Processos>;
  public table = [
    'num',
    'obj',
    'obs',
    'nrLicitacao',
    'tipoLicitacao',
    'statusProcesso',
    'origem',
    'atual',
    'atualizar',
    'deletar'
  ];
  constructor(private service: HttpSipService<Processos>) { }

  ngOnInit() {
    this.data = new TemplateDataSource<Processos>(this.service,
      Configuration.URLS_DESENVOLVIMENTO.API + `processos/page/`);
    this.data.loadRecursosPage();
  }
  ngAfterViewInit(): void {
    this.page.page.pipe(
      tap(() => this.loadPages())
    )
      .subscribe();
  }
  private loadPages() {
    this.data.loadRecursosPage(this.page.pageIndex, this.page.pageSize);
  }
}
