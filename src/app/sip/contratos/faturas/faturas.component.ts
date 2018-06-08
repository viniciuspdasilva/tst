import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Faturas} from '../../../model/contratos/faturas';
import {TemplateDataSource} from '../../../config/TemplateDataSource';
import {HttpSipService} from '../../../service/api/http-sip.service';
import {Configuration} from '../../../config/Configuration';
import {MatPaginator} from '@angular/material';
import {tap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-faturas',
  templateUrl: './faturas.component.html',
  styleUrls: ['./faturas.component.scss']
})
export class FaturasComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) page: MatPaginator;
  public data: TemplateDataSource<Faturas>;
  public table = [
    'numero',
    'emissao',
    'recebimento',
    'ano',
    'mes',
    'despesa',
    'valor',
    'despesa',
    'valor',
    'observacoes',
    'actions'
  ];
  constructor(private service: HttpSipService<Faturas>) { }

  ngOnInit() {
    this.data = new TemplateDataSource<Faturas>(this.service,
      Configuration.URLS_DESENVOLVIMENTO.API + 'faturas/page/');
    this.data.loadRecursosPage();
  }
  applyFilter(termo: string | any) {
    console.log(termo);
  }

  ngAfterViewInit(): void {
    this.page.page
      .pipe(
        tap(() => this.loadLessonsPage())
      )
      .subscribe();
  }

  private loadLessonsPage() {
    this.data.loadRecursosPage(this.page.pageIndex, this.page.pageSize);
  }
}
