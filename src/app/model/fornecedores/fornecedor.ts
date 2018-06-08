import {Telefone} from '../util/telefone';
import {Endereco} from '../util/endereco';

export class Fornecedor {
  constructor(
    public nomeEmpresa: string,
    public cnpjEmpresa: string,
    public siteEmpresa: string,
    public emailEmpresa: string,
    public obsEmpresa: string,
    public telefoneEmpresa: Telefone,
    public enderecoEmpresa: Endereco
  ) {}
  static COLUMNS_DATA_EXIBIR = [
    'cnpjEmpresa',
    'nomeEmpresa',
    'siteEmpresa',
    'emailEmpresa',
    'telefoneEmpresa',
    'enderecoEmpresa',
    'obsEmpresa'
  ];
  static COLUMNS_DATA_CADASTRO = [
    'selection',
    'cnpjEmpresa',
    'nomeEmpresa',
    'telefoneEmpresa'
  ];
}
