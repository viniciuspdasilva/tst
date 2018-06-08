import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js';
import * as $ from 'jquery';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.scss']
})
export class SolicitacoesComponent implements OnInit {
  public chart = [];
  public divs: JQuery;
  pieChartData: any = {
    chartType: 'PieChart',
    dataTable: [
      ['Department', 'Revenues', 'Another column'],
      ['Shoes', 10700, 100],
      ['Sports', 15400, 25],
      ['Toys', 12500, 40],
      ['Electronics', 2100, 889],
      ['Food', 22600, 78],
      ['Art', 1100, 42]
    ],
    formatters: [
      {
        columns: [1, 2],
        type: 'NumberFormat',
        options: {
          prefix: '&euro;', negativeColor: '#FF0000', negativeParens: true
        }
      }
    ],
    options: {title: 'Countries', allowHtml: true}
  };
  constructor() { }

  ngOnInit() {
    this.divs = $('#chart_att_locais');
  }

  alert() {
    console.log('igi');
  }


  login() {
    alert('funcionou');
  }
}
