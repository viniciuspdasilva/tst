export class UnidAdm {
  constructor(
    public cod_un_adm: any = 0,
    public sig_un_adm: String,
    public des_un_adm: String
  ) {}

  public static COLUMNS_DATA_EXIBI: Array<String> = [
    'cod_un_adm',
    'sig_un_adm',
    'des_un_adm',
    'updated',
    'delete'
  ];
  public static COLUMNS_DATA_CADASTRO: Array<any>  = [
    {label: 'Sigla', value: 'sig_un_adm', isButton: {value: false, type: -1} },
    {label: 'Descrição', value: 'des_un_adm', isButton: {value: false, type: -1} },
  ];

  public static factoryObject(): UnidAdm {
    return new UnidAdm(
      -1,
      '',
      ''
    );
  }
}
