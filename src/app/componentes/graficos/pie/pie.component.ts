import {Component, Input, OnInit} from '@angular/core';
import {ChartPieService} from '../../../service/chart-pie.service';
import '../../../model/charts/pie-chart';
declare let google: any;
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  @Input('data') data: any[];
  @Input('options') options: any = null;
  @Input('width') width: number = 400;
  @Input('height') height: number = 400;
  @Input('id') id: any;
  constructor(private _pieChartService: ChartPieService) { }

  ngOnInit() {
    this._pieChartService.BuildPieChart(this.id, this.data, this.options);
  }

}
