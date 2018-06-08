import {User} from './user';

export class Ferias {
  constructor(
    public qntDiasFerias: Number | String,
    public dtInitFerias: Date | String,
    public dtFinalFerias: String | Date,
    public obsFerias: String,
    public idUser: User
  ) {}
}
