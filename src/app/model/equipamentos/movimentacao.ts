import {Equipamentos} from './equipamentos';
import {User} from '../usuarios/user';
import {UnidAdm} from '../locais/unid-adm';

export class Movimentacao {
  constructor(
    public nrDocMov: String,
    public obsMov: String,
    public idEquiMov: Array<Equipamentos>,
    public idServResp: User,
    public idLocalAtual: UnidAdm,
    public idLocalDest: UnidAdm
  ) {}
}
