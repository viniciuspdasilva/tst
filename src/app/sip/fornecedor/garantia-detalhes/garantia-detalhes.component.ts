import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-garantia-detalhes',
  templateUrl: './garantia-detalhes.component.html',
  styleUrls: ['./garantia-detalhes.component.scss']
})
export class GarantiaDetalhesComponent implements OnInit {
  public now = moment();
  @Input('data') data: any;
  constructor() { }

  ngOnInit() {
    this.now.locale('pt-BR');
  }

}
