import {Atividades} from './atividades';
import {Equipamentos} from '../equipamentos/equipamentos';

export class Internos {
  constructor(
    public hrIniSSi: String,
    public hrFinalSSi: String,
    public nrSSi_CodEA: Array<Equipamentos>,
    public nrSSi_idMsg: Array<Atividades>,
    public idSS: {}
  ) {}
}
