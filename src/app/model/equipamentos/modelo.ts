export class Modelo {
  constructor(
    public infoModelo: string = '',
    public obsModelo: string = ''
  ) {}

  public static COLUMNS_DATA_EXIBI: Array<any> = [
    {label: 'Nome', value: 'infoModelo', isButton: false},
    {label: 'Observações', value: 'obsModelo', isButton: false},
    {label: '', value: 'actions', isButton: true}
  ];
  public static COLUMNS_DATA_CADASTRO: Array<any> = [
    {label: 'Nome', value: 'infoModelo', isButton: {value: false, type: -1}},
    {label: 'Observações', value: 'obsModelo', isButton: {value: false, type: -1}}
  ];

  public static factoryObject(): Modelo {
    return new Modelo();
  }
}
