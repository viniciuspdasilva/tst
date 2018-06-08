import {Login} from '../login/login';

export class User {
  constructor(
    public nomeUsuario: String,
    public cpf: String,
    public ativo: boolean,
    public email: String,
    public dtNascimento: String | Date,
    public idLogin: Login
  ) {}

  public static COLUMNS_DATA_EXIBI: Array<string> = [
    'nomeUsuario',
    'cpf',
    'email',
    'updated',
    'delete'
  ];
  public static COLUMNS_DATA_CADASTRO: Array<String> = [
    'nomeUsuario',
    'cpf',
    'email',
    'select'
  ];
}
