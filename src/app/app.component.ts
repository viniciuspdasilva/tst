import {ChangeDetectorRef, Component} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ActivatedRoute, UrlSegment} from '@angular/router';
import {LoginService} from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  name = localStorage.getItem('name');
  logado = this.login.isLogin();
  mobileQuery: MediaQueryList;
  dataSourceData: any;
  columnsToDisplay = ['userName', 'age'];
  routes: any[] = [
    new Navigation('', '/', true, {grupo: 1, authorizaded: true}, false),
    new Navigation('Atendimentos', '/atendimentos', true, {grupo: 1, authorizaded: true}, true),
    new Navigation('Contratos', '/contratos', true, {grupo: 1, authorizaded: true}, true),
    new Navigation('Equipamentos', '/equipamentos', false, {grupo: 1, authorizaded: true}, true),
    new Navigation('Faturas', '/faturas', true, {grupo: 1, authorizaded: true}, true),
    new Navigation('Processos', '/processos', true, {grupo: 1, authorizaded: true}, true),
    new Navigation('Fornecedores', '/', false, {grupo: 1, authorizaded: true}, true),
    new Navigation('Setores', '/', false, {grupo: 1, authorizaded: true}, true),
    new Navigation('Servidores', '/', false, {grupo: 1, authorizaded: true}, true),
    new Navigation('Login', '/login', true, {grupo: 1, authorizaded: true}, true),
    new Navigation('Informações', '/', true, {grupo: 1, authorizaded: true}, true),
  ];
  private _mobileQueryListener: () => void;
  public url: UrlSegment[];

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              private route: ActivatedRoute,
              private login: LoginService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.route.url.subscribe(
      () => {
        console.log(window.location.href);
      }
    );
    console.log(window.location.href);
  }


}


export interface MenuItem {

  name: string;
  route: string;
}

export class Navigation {
  constructor(
    public label: string,
    public router: string,
    public actived: boolean,
    public rules: {
      grupo: number,
      authorizaded: boolean
    },
    public menu: boolean
  ) {
  }
}
