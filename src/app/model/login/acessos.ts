import {Login} from './login';
import {Token} from '@angular/compiler';

export class Acessos {
  constructor(
    public ipAcesso: String,
    public dataAcesso: String | Date,
    public loginAcesso: String | Login,
    public tokenAcesso: String | Token
  ) {}
}
