import {Suprimento} from './suprimento';
import {UnidAdm} from '../locais/unid-adm';
import {Modelo} from './modelo';
import {Tipo} from './tipo';
import {Contratos} from '../contratos/contratos';
import {User} from '../usuarios/user';

export class Equipamentos {
  constructor(
    public numGrupo: number,
    public nomeEquip: string,
    public numTombamento: string,
    public numSerie: string,
    public tipoAquisicao: number,
    public isActivo: boolean = true,
    public obsInativo: string = 'N/C',
    public dtInativo: string = 'N/C',
    public dttMov: Date,
    public isCritico: boolean = false,
    public obsEqp: string,
    public idContrato: Contratos,
    public idServ: User,
    public codTipo: Tipo,
    public codModelo: Modelo,
    public idLocal: UnidAdm,
    public idSuprimentos: Array<Suprimento>
  ) {}
  public static factoryObject() {
    return new Equipamentos(
        -1,
      '',
      '',
      '',
      -1,
      true,
      '',
      '',
      new Date(),
      false,
      '',
      null,
      null,
      null,
      null,
      null,
      null
    );
  }
  public static COLUMNS_TABLE_EXIBIR = [
    'nome',
    'modelo',
    'tipo',
    'serie',
    'patrimonio',
    'processo',
    'contrato',
    'vigencia',
    'uniAdm',
    'actions'
  ];
  public static COLUMNS_TABLE_CADASTRO = [
    'selection',
    'patrimonio',
    'nome',
    'modelo',
    'tipo',
    'serie'
  ];
  set setIdContrato(value: Contratos) {
    this.idContrato = value;
  }

  set setIdServ(value: User) {
    this.idServ = value;
  }

  set setCodTipo(value: Tipo) {
    this.codTipo = value;
  }

  set setCodModelo(value: Modelo) {
    this.codModelo = value;
  }

  set setIdLocal(value: UnidAdm) {
    this.idLocal = value;
  }

  set setIdSuprimentos(value: Array<Suprimento>) {
    this.idSuprimentos = value;
  }

  set setDtInativo(value: string) {
    this.dtInativo = value;
  }



}
