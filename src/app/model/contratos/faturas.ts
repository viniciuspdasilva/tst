import {User} from '../User';

export class Faturas {
  constructor(
    public numNF: String,
    public dtEmicaoNF: Date,
    public dtRecNF: Date,
    public anoRef: Date,
    public mesRef: Date,
    public tipoDesp: String,
    public vlrItem: Number,
    public obsNF: String,
    public idServCad: User
  ) {}

  public static COLUMNS_TABLE_EXIBIR: Array<string> = [
    'numNF',
    'tipoDesp',
    'vlrItem',
    'dtRecNF'
  ];
  public static factoryFaturas() {
    return new Faturas(
      '',
      new Date(),
      new Date(),
      new Date(),
      new Date(),
'',
      1,
      '',
      null
    );
  }
}
