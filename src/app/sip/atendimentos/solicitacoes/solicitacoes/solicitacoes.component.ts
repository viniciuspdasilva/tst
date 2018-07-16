import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js';
import * as $ from 'jquery';
import {PieChart} from '../../../../model/charts/pie-chart';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.scss']
})
export class SolicitacoesComponent implements OnInit {
  public chart = [];
  public divs: JQuery;
  data1: any[];
  config1: PieChart;
  id1: string;
  data2: any[];
  config2: PieChart;
  id2: string;
  constructor() { }

  ngOnInit() {
    this.data1 = [['Task', 'Horas por dia'],
      ['Eat',      3],
      ['Commute',  2],
      ['Watch TV', 5],
      ['Video games', 4],
      ['Sleep',    10]
    ];
   this.config1 = new PieChart('Test 1', 0.4);
   this.id1 = 'pipe1';
   this.data2 = [['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]];
    this.config2 = new PieChart('Test 2', 0.4);
    this.id2 = 'pipe2';
  }
}
