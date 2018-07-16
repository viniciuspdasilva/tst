import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ActivatedRoute, UrlSegment} from '@angular/router';
import {LoginService} from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, AfterViewChecked {
  title = 'SIP';
  messagens = [
    new NotificationsMessages('Contratos Atrasados', 'Contratos Atrasados estão vencendo hoje', 'Hoje', 1, 1),
    new NotificationsMessages('Atendimentos Externos', 'Atendimentos externos marcados para o dia de hoje', new Date(), 2, 3),
    new NotificationsMessages('Suporte aos usuarios', 'Isso é só uma mensagem de suporte para o usuario', '29/2012', 4, 2)
  ];
  name = localStorage.getItem('name');
  logado = this.login.isLogin();
  link_imgs = [
    {label: 'tst_logo', src: '../assets/imgs/logo_tst.png'},
    {label: 'img_usuarios', src: '../assets/imgs/img_usuario.png'},
    {label: 'img_notification', src: '../assets/imgs/_chat_alert-512.png'}
  ];
  mobileQuery: MediaQueryList;
  dataSourceData: any;
  columnsToDisplay = ['userName', 'age'];
  routes: any[] = [
    new Navigation('', '/', true, {grupo: 1, authorizaded: true}, false),
    new Navigation('Atendimentos', '/atendimentos', true, {grupo: 1, authorizaded: true}, true),
    new Navigation('Contratos', '/contratos', true, {grupo: 1, authorizaded: true}, true),
    new Navigation('Equipamentos', '/equipamentos', true, {grupo: 1, authorizaded: true}, true),
    new Navigation('Faturas', '/faturas', true, {grupo: 1, authorizaded: true}, true),
    new Navigation('Processos', '/processos', true, {grupo: 1, authorizaded: true}, true),
    new Navigation('Fornecedores', '/fornecedores', true, {grupo: 1, authorizaded: true}, true),
    new Navigation('Setores', '/', false, {grupo: 1, authorizaded: true}, true),
    new Navigation('Servidores', '/', false, {grupo: 1, authorizaded: true}, true),
    new Navigation('Login', '/login', true, {grupo: 1, authorizaded: true}, true),
    new Navigation('Informações', '/', true, {grupo: 1, authorizaded: true}, true),
  ];
  childrenRoutes: any;
  private _mobileQueryListener: () => void;
  public url: any;
  nameSystem: any = 'Sistema de Informações Patrimoniais';

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              private route: ActivatedRoute,
              private login: LoginService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('mudou');
  }
 public isArray(array: Array<any>) {
    return Array.isArray(array);
  }

  ngAfterViewChecked(): void {
    let i = 0;
    do {
      this.childrenRoutes = [];
      this.childrenRoutes = [
        {label: 'Novo', url: `${window.location.pathname}/cadastro`},
        {label: 'Relatorio', url: `${window.location.pathname}/relatorio`}
        ];
      i++;
    }while (i === 0);

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
export class NotificationsMessages {
  constructor(
    public titleMessage: string,
    public textMessage: string,
    public dateMessage: Date | String | string,
    public severityMessage: number,
    public typeMessage: number
  ) {}
}
