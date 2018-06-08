import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpSipService} from '../../service/api/http-sip.service';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';
import {pipe} from 'rxjs';
import {first} from 'rxjs/internal/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public imgs_login = {
    tela: '../../../assets/imgs/73730_TST2.jpg',
    logo: '../../../assets/imgs/logo-tst.png'
  };
  public url = `https://my-json-server.typicode.com/viniciuspdasilva/db/users`;
  public user: any = [];
  private usuarioAuth: boolean = false;
  mostrarMenu = new EventEmitter<boolean>();
  constructor(private fb: FormBuilder,
              private http: LoginService,
              private router: Router) {
    this.createForm();
  }

  public logar() {
    const matricula = this.loginForm.value.matricula;
    const password  =  this.loginForm.value.password;
    if ( this.http.login(matricula, password)) {
      alert('Login');
      localStorage.setItem('name', 'Vinicius');
      localStorage.setItem('matricula', 'E007078');
      this.router.navigate(['/']);
    } else {
      alert('dados incorretos');
    }
  }

  ngOnInit() {
    this.http.logout();
  }
  private createForm() {
    this.loginForm = this.fb.group({
      matricula: ['',
        [
          Validators.required
        ]
      ],
      password: ['', [
        Validators.required
      ]]
    });
  }
}
