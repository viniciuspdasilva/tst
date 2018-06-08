import {Equipamentos} from './equipamentos';
import {User} from '../usuarios/user';

export class Inoperabilidade {

  constructor(
    public dataInitInoper: Date | String,
    public horaInitInoper: Date | String,
    public dataFinalInoper: Date | String,
    public horaFinalInoper: Date | String,
    public motivoInoper: String,
    public equipInoper: Array<Equipamentos>,
    public codServ: User
  ) {}
}
