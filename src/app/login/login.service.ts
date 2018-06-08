import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: boolean = false;
  constructor(private http: HttpClient) {}
  login(username: string, password: string)  {
    this.user = username === 'E007078' && password === '123456';
    return this.user;
  }
  isLogin() {
    return this.user;
  }
  logout() {
    this.user = false;
    localStorage.removeItem('nome');
    localStorage.removeItem('matricula');
  }

}
