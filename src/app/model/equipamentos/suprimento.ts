export class Suprimento {
  constructor(
    public nomeSuprimento: String,
    public tipoSuprimento: String,
    public obsSuprimento: String
  ) {}
  public static COLUMNS_DATA_EXIBI: Array<any> = [
    {label: 'Nome', value: 'nomeSuprimento', isButton: false},
    {label: 'Tipo', value: 'tipoSuprimento', isButton: false},
    {label: 'Observações', value: 'obsSuprimento', isButton: false},
    {label: '', value: 'actions', isButton: true}
  ];
  public static COLUMNS_DATA_CADASTRO: Array<any> = [
    {label: 'Nome', value: 'nomeSuprimento', isButton: false},
    {label: 'Tipo', value: 'tipoSuprimento', isButton: false},
    {label: '', value: 'actions', isButton: true}
  ];

  public static factoryObject() {
    return new Suprimento(
      '',
      '',
      ''
    );
  }
}
