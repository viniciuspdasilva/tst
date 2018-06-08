export class Tipo {
  constructor(
    public desTipoEquip: string,
    public indEac: number,
    public isUseSuprim: boolean = false,
    public isUseChave: boolean = false
  ) {}

  public static COLUMNS_DATA_EXIBI: Array<any> = [
    {label: 'Nome', value: 'desTipoEquip', isButton: false},
    {label: 'Indicador', value: 'indEac', isButton: false},
    {label: '', value: 'updated', isButton: true},
    {label: '', value: 'deleted', isButton: true}
  ];
  public static COLUMNS_DATA_CADASTRO: Array<any> = [
    {label: 'Nome', value: 'desTipoEquip', isButton: false},
    {label: 'Indicador', value: 'indEac', isButton: false}
  ];

  public static factoryObject() {
    return new Tipo(
      '',
      -1
    );
  }
}
