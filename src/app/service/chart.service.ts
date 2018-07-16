import { Injectable } from '@angular/core';

declare let google: any;

export class ChartService {

  constructor() {
    google.charts.load('current', {'packages': ['corechart']});
  }

  protected buildChart(data: any[], chatfunc: any, options: any) {
    const func = (chatfunc, options) => {
      const datatable = google.visualization.arrayToDataTable(data);
      chatfunc().draw(datatable, options);
    };
    const callback = () => func(chatfunc, options);
    google.charts.setOnLoadCallback(callback);
  }
}
