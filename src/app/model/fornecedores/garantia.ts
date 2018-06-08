import {Equipamentos} from '../equipamentos/equipamentos';

export class Garantia {
  constructor(
    public dtInitGarantia: Date,
    public dtFinalGarantia: Date,
    public tempoGarantia: Number,
    public nmSolGarantia: String,
    public codEquip: Equipamentos
  ) {}
  static COLUMNS_DATA_EXIBI = [
    'nmSolGarantia',
    'tempoGarantia',
    'dtInitGarantia',
    'dtFinalGarantia',
    'codEquip'
  ];
  static COLUMNS_DATA_CADASTRO = [
    'actions',
    'nmSolGarantia',
    'tempoGarantia'
  ];
}
