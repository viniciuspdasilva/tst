import {Falhas} from '../equipamentos/falhas';
import {Atividades} from './atividades';
import {Contratos} from '../contratos/contratos';
import {Equipamentos} from '../equipamentos/equipamentos';
import {Atendimentos} from './atendimentos';
import {Faturas} from '../contratos/faturas';

export class Externos {
  constructor(
    public nrChamado: String = '',
    public nomeAtendente: String = '',
    public obsDefeito: Array<Falhas>,
    public obsPecasSubst: Array<Equipamentos>,
    public obsAtividades: Array<Atividades>,
    public idSS: Atendimentos,
    public idNF: Faturas,
    public idContrato: Contratos
  ) {}

  public static COLUMNS_TABLE_EXIBIR: Array<string> = [
    'nrChamado',
    'nomeAtendente',
    'tituloCritico',
    'tituloMsg',
    'numeroOs',
    'numNF',
    'nrContrato'
  ];
  public static COLUMNS_TABLE_CADASTRO: string[] = [
    'idSS',
    'nomeFornecedor',
    'nrChamado',
    'nomeAtendente'
  ];
}
