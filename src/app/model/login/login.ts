import {Grupo} from './grupo';

export class Login {
  constructor(
    public userLogin: string,
    public senhaAcesso: string,
    public numTentativas: number,
    public isBloqueado: boolean,
    public idGrupo: Grupo
  ) {}
}
