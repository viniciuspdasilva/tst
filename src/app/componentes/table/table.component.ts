import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpSipService} from '../../service/api/http-sip.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('dataSource') dataSource: any;
  @Input('table') table: any = {
    columns: [''],
    label: ['']
  };
  @Input('isButton') isButton: boolean;
  @Output('addDadosExternos') addDadosExternos = new EventEmitter();
  constructor(private http: HttpSipService<any>) { }

  ngOnInit() {
  }

  addDados(res) {
    let dados = [];
    dados.push(res);
    return dados;
  }
}
