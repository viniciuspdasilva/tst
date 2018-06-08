import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServidoresComponent} from '../../servidores/servidores.component';
import {UsuariosComponent} from '../../usuarios/usuarios.component';
import {FormularioUsuariosComponent} from '../../cadastro/formulario-usuarios/formulario-usuarios.component';
import {FormularioServidoresComponent} from '../../cadastro/formulario-servidores/formulario-servidores.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ServidoresComponent,
    UsuariosComponent,
    FormularioServidoresComponent,
    FormularioUsuariosComponent,
  ],
  exports: [
    ServidoresComponent,
    UsuariosComponent,
    FormularioServidoresComponent,
    FormularioUsuariosComponent,
  ]
})
export class UsuariosModule { }
