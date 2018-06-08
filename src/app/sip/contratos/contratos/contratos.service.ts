import { Injectable } from '@angular/core';
import {Contratos} from '../../../model/contratos/contratos';
import {isArray} from 'util';

@Injectable({
  providedIn: 'root'
})
export class ContratosService {
  constructor() {}
  public factoryTabs(object: any, tabs: Array<any>): Array<any> {
    const keys = Object.keys(object);
    for (let i = 0; i <= keys.length; i++) {
      if (typeof object[keys[i]] === 'object') {
        if (tabs.length <= 0) {
          tabs = [{
            label: keys[i],
            value: keys[i].toUpperCase()
          }];
        } else {
          tabs.push({
            label: keys[i],
            value: keys[i].toUpperCase()
          });
        }
      }
    }
    return tabs;
  }
  public relatorioDialog(data: {caso: number, res: any, detalhes: any, trigger: boolean, header:  string | String, tabs?: any }) {
    let relatorio: any = {};
    data.trigger = false;
    switch (data.caso) {
      case 0:
        relatorio = {
          detalhes:  data.res.idFornecedor,
          header: `Informações: Fornecedor`,
          trigger: !data.trigger,
          tabs: this.factoryTabs(data.detalhes, data.tabs),
          type: 0
        };
        break;
      case 1:
        relatorio = {
          detalhes:  data.res.idGarantia,
          header: `Informações: Garantia`,
          trigger: !data.trigger,
          tabs: this.factoryTabs(data.detalhes, data.tabs),
          type: 1
        };
        break;
      case 2:
        relatorio = {
          detalhes:  data.res.idServGestor,
          header: `Informações: Gestores do Contrato`,
          trigger: !data.trigger,
          tabs: [],
          type: 2
        };
        break;
      case 3:
        relatorio = {
          detalhes:  data.res.equipamentos,
          header: `Informações: Equipamentos adquiridos`,
          trigger: !data.trigger,
          tabs: [],
          type: 3
        };
        break;
      case 4:
        relatorio = {
          detalhes:  data.res.AttExterno,
          header: `Informações: Atendimentos abertos com o fornecedor`,
          trigger: !data.trigger,
          tabs: [],
          type: 4
        };
        break;
      default:
        alert('Opção escolhida não existe');
        break;
    }
    return relatorio;
  }
  public renderDados(data: any, id: any): any {
    let dados: any = this.relatorioDialog(data);
    let labels: any;
    let rel: any = {};
    labels = Object.keys(dados);
    return data;
  }

}
