import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Equipamentos} from '../../../model/equipamentos/equipamentos';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpSipService} from '../../../service/api/http-sip.service';
import {catchError, finalize, tap} from 'rxjs/internal/operators';
import {Configuration} from '../../../config/Configuration';
import {MatPaginator, MatSort} from '@angular/material';

@Component({
  selector: 'app-equipamentos',
  templateUrl: './equipamentos.component.html',
  styleUrls: ['./equipamentos.component.scss']
})
export class EquipamentosComponent implements OnInit, AfterViewInit {


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;
  public dataSource: EquipamentosDataTable;
  public table = Equipamentos.COLUMNS_TABLE_EXIBIR;
  public totalPages: number;
  public step: number = 0;
  constructor(private service: HttpSipService<Equipamentos>) {}

  ngOnInit() {
    this.dataSource = new EquipamentosDataTable(this.service, Configuration.URLS_SIP_DESENVOLVIMENTO.equipamentos.base);
    this.dataSource.loadEquipamentos();
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  abrirModal(rows) {
    console.log(rows);
  }

  applyFilter(value: any) {

  }

  ngAfterViewInit(): void {
    this.paginator.page
      .pipe(
        tap(() => this.loadLessonsPage())
      )
      .subscribe();
  }

  private loadLessonsPage() {
    this.dataSource.loadEquipamentos(this.paginator.pageIndex, this.paginator.pageSize);
  }
}

export class EquipamentosDataTable extends DataSource<Equipamentos> {
  private eqSubject = new BehaviorSubject<Equipamentos[]>([]);
  public pagSubject = new BehaviorSubject<number>(0);
  public paginacaoSubject = new BehaviorSubject<any>({});
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private service: HttpSipService<Equipamentos>, public urlBase: string) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<Equipamentos[]> {
    return this.eqSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.eqSubject.complete();
    this.loadingSubject.complete();
  }

  public loadEquipamentos(page: number = 0, size: number = 5) {
    this.loadingSubject.next(true);

    this.service.getRecursoPage(this.urlBase, page, size)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(
        (equipamentos: any) => {
          this.eqSubject.next(equipamentos.content);
          this.pagSubject.next(equipamentos.pageable.pageNumber);
          this.paginacaoSubject.next(equipamentos.totalPages);
        }
      );
  }

}
