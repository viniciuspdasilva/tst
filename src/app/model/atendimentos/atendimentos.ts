import {UnidAdm} from '../locais/unid-adm';
import {User} from '../usuarios/user';

export class Atendimentos {
  constructor(
    public numeroOs: String,
    public situacaoSS: number | Number,
    public prioridadeSS: number | Number,
    public dtSS: Date | String,
    public obsSS: String,
    public localEqpSS: UnidAdm,
    public codServ: User
  ) {}
}
