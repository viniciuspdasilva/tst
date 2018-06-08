import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Contratos} from '../../../model/contratos/contratos';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpSipService} from '../../../service/api/http-sip.service';
import {catchError, finalize, tap} from 'rxjs/internal/operators';
import {MatPaginator} from '@angular/material';
import {Configuration} from '../../../config/Configuration';
import {ContratosService} from './contratos.service';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.scss'],
  providers: [
    ContratosService
  ]
})
export class ContratosComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public data: ContratosDataSource;
  public table = [
    `numContrato`,
    'processo',
    'licitacao',
    'manutencao',
    'pregao',
    'tipoContrato',
    'valor',
    'fornecedor',
    'garantia',
    'gestores',
    'equipamentos',
    'atendimentos'
  ];
  toogle = false;
  header: String = 'Informações: ';
  detalhes: any  = [];
  tabs: any = [];
  relatorio: any = {};
  render: any = [];
  ngOnInit() {
    this.data = new ContratosDataSource(this.service);
    this.data.loadContratosPage(Configuration.URLS_DESENVOLVIMENTO.API + 'contratos/page/');
  }
  constructor(private service: HttpSipService<Contratos>,
              private servicesContratos: ContratosService) { }

  applyFilter(termo: string | any) {
    console.log(termo);
  }

  ngAfterViewInit(): void {
    this.paginator.page
      .pipe(
        tap(() => this.loadLessonsPage())
      )
      .subscribe();
  }

  private loadLessonsPage() {
    this.data.loadContratosPage(
      Configuration.URLS_DESENVOLVIMENTO.API + 'contratos/page/',
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }

  mostrarDetalhes(res: any, type: number) {
    this.toogle = true;
    this.relatorio = this.servicesContratos.relatorioDialog({
      caso: type,
      res: res,
      detalhes: this.detalhes,
      trigger: this.toogle,
      header: this.header,
      tabs: this.tabs});
    this.detalhes = this.relatorio.detalhes;
    this.header = this.relatorio.header;
    this.render = this.relatorio.type;
  }
}
export class ContratosDataSource extends DataSource<Contratos> {
  private contratosSubject = new BehaviorSubject<Contratos[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public pageable = new BehaviorSubject<any>(0);
  public load$ = this.loadingSubject.asObservable();


  constructor(private service: HttpSipService<Contratos>) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<Contratos[]> {
    return this.contratosSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.pageable.complete();
    this.loadingSubject.complete();
    this.contratosSubject.complete();
  }
  loadContratosPage(urlBase: string, page: number = 0, size: number = 5) {
    this.loadingSubject.next(true);

    this.service.getRecursoPage(urlBase, page, size)
      .pipe(
        catchError((error) => of(error)),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(
        (contratos) => {
          this.contratosSubject.next(contratos.content);
        }
      );
  }
}
