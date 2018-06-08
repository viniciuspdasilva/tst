import {User} from '../usuarios/user';

export class Falhas {
  constructor(
    public isCritico: boolean,
    public tituloCritico: String,
    public msgCritico: String,
    public dtCritico: any,
    public idMsg_codUsuario: User
  ) {}
}
