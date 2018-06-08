import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CadastroService} from '../../../srv/cadastro/cadastro.service';
import {Faturas} from '../../../../model/contratos/faturas';
import {HttpSipService} from '../../../../service/api/http-sip.service';
import {Configuration} from '../../../../config/Configuration';
import {catchError, finalize} from 'rxjs/internal/operators';
import {Message} from 'primeng/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-formulario-notas',
  templateUrl: './formulario-notas.component.html',
  styleUrls: ['./formulario-notas.component.scss'],
  providers: [MessageService]
})
export class FormularioNotasComponent implements OnInit {

  notasForm: FormGroup;
  faturas: Faturas = Faturas.factoryFaturas();
  msgs: Message[] = [];
  constructor(private fb: FormBuilder,
              private http: HttpSipService<Faturas>,
              public cadastroNotas: CadastroService<Faturas>,
              private messageService: MessageService) {
    this.createForm();
  }
  ngOnInit() {
  }
  createForm() {
    this.notasForm = this.fb.group({
      numNF:      ['1223333', Validators.required],
      dtEmicaoNF: [new Date(1111), Validators.required],
      dtRecNF:    [new Date(2222), Validators.required],
      anoRef:     [new Date(112), Validators.required],
      mesRef:     [new Date(112), Validators.required],
      tipoDesp:   [new Date(112), Validators.required],
      vlrItem:    [1522, Validators.required],
      obsNF:      ['', Validators.required]
    });
  }

  public cadastrarNotas() {
    this.faturas = this.cadastroNotas.factoryObject(this.notasForm.value, this.faturas);
    this.http.salvarRecurso(Configuration.URLS_SIP_DESENVOLVIMENTO.faturas.base, this.faturas).
    pipe(
      catchError(err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Dados não cadastrados',
          detail: 'Dados não cadastrados com sucesso' + err,
          id: 1
        });
        return err;
      }),
      finalize(() => console.log('fim'))
    ).subscribe(
      res => {
        this.messageService.add({
          severity: 'success',
          summary: 'Dados gravados com sucesso!',
          detail: 'Os dados enviados foram cadastrados com sucesso!'
        });
      }
    );
  }
}
