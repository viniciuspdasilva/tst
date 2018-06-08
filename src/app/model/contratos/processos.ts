import {UnidAdm} from '../locais/unid-adm';

export class Processos {
  constructor(
    public numProcesso: String,
    public objProcesso: String,
    public obsProcesso: String,
    public nrLicitacao: String,
    public tipoLicitacao: String,
    public statusProcesso: Number,
    public idLocalOrig: UnidAdm,
    public idLocalAtual: UnidAdm
  ) {}

  public static COLUMNS_TABLE_EXIBIR: Array<String> = [
    'numProcesso',
    'objProcesso',
    'nrLicitacao',
    'statusProcesso',
    'idLocalOrig',
    'idLocalAtual'
  ];
  public static COLUMNS_TABLE_CADASTRO: Array<String> = [
    'numProcesso',
    'objProcesso',
    'nrLicitacao',
    'actions'
  ];
  public static STATUS_CONTRATOS: any = [
    {label: 'Pendente',  value: '0'},
    {label: 'Aberto',    value: '1'},
    {label: 'Encerrado', value: '2'}
  ];
  public static TIPOS_LICITACAO: any = [
    {label: 'Adesão a Regime de Preço', value: '0'},
    {label: 'Carta Convite', value: '1'},
    {label: 'Concorrência Pública', value: '2'},
    {label: 'Dispensa de Licitação', value: '3'},
    {label: 'Inexigibilidade', value: '4'},
    {label: 'Padrão', value: '5'},
    {label: 'Pregão', value: '6'},
    {label: 'Pregão Eletrônico', value: '7'},
    {label: 'Tomada de Preços', value: '8'},
  ];
}
