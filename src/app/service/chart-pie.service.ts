import { Injectable } from '@angular/core';
import {ChartService} from './chart.service';
import {PieChart} from '../model/charts/pie-chart';

declare let google: any;
@Injectable({
  providedIn: 'root'
})
export class ChartPieService extends ChartService {
  constructor() {
    super();
  }
  public BuildPieChart(elementId: string, data: any[], config: PieChart): void {
    const chartFunc = () => { return new google.visualization.PieChart(document.getElementById(elementId)); };
    const options = {
      title: config.title,
      pieHole: config.pieHole
    };
    this.buildChart(data, chartFunc, options);
  }
}
