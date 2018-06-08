import {User} from '../usuarios/user';

export class Atividades {
  constructor(
    public diaAtt: any,
    public tituloMsg: String,
    public textoMsg: String,
    public idMens_codUsuario: User
  ) {}
}
