import {Processos} from './processos';
import {Garantia} from '../fornecedores/garantia';
import {User} from '../usuarios/user';
import {Fornecedor} from '../fornecedores/fornecedor';
import {EquipamentosComponent} from '../../sip/equipamentos/equipamentos/equipamentos.component';
import {Externos} from '../atendimentos/externos';
import {Equipamentos} from 'src/app/model/equipamentos/equipamentos';

export class Contratos {
  constructor(
    public nrContrato: String = '',
    public tipoContrato: String = '',
    public tipoManut: String = '',
    public dtAssContrato: Date = new Date(),
    public dtInitContrato: Date = new Date(),
    public dtFinContrato: Date = new Date(),
    public drcContrato: Number = 1,
    public vlrContrato: Number = 1,
    public obsContrato: String = '',
    public AttExterno: Array<Externos>,
    public equipamentos: Array<Equipamentos>,
    public idFornecedor: Fornecedor,
    public idGarantia: Garantia,
    public idProcessos: Processos,
    public idServGestor: Array<User>
  ) {}

  public set setAttExterno(value: Array<Externos>) {
    this.AttExterno = value;
  }

  public set setequipamentos(value: Array<Equipamentos>) {
    this.equipamentos = value;
  }

  public set setidFornecedor(value: Fornecedor) {
    this.idFornecedor = value;
  }

  public set setidGarantia(value: Garantia) {
    this.idGarantia = value;
  }

  public set setidProcessos(value: Processos) {
    this.idProcessos = value;
  }

  public set setidServGestor(value: Array<User>) {
    this.idServGestor = value;
  }

  public static COLUMNS_TABLE: string[] = [
    'nrContrato',
    'tipoContrato',
    'tipoManut',
    'numProcesso',
    'nrLicitacao',
    'dtAssContrato',
    'dtInitContrato',
    'dtFinContrato',
    'gestores',
    '_equipamentos'
  ];
  public static COLUMNS_TABLE_CADASTRO: any[] = [
    {label: 'Contrato', value: 'nrContrato', isButton: {value: false, type: 0}},
    {label: 'Processo', value: 'dtAssContrato', isButton: {value: false, type: 0}},
    {label: 'Licitação', value: 'dtInitContrato', isButton: {value: false, type: 0}},
    {label: 'Assinatura', value: 'obsContrato', isButton: {value: false, type: 0}}
  ];
  public static factoryContrato(): Contratos {
    return new Contratos(
      '',
      '',
      '',
      new Date(),
      new Date(),
      new Date(),
      1,
      1,
      '',
      null,
      null,
      null,
      null,
      null,
      null
    );
  }
}
