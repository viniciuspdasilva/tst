import {User} from '../usuarios/user';

export class Local {
  constructor(
    public trechoLocais: String,
    public nomeLocais: String,
    public numSala: String,
    public idServResp: String | User) {
  }
}
