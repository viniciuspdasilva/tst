import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fornecedor-detalhes',
  templateUrl: './fornecedor-detalhes.component.html',
  styleUrls: ['./fornecedor-detalhes.component.scss']
})
export class FornecedorDetalhesComponent implements OnInit, AfterViewInit {
  @Input('data') data: any = '';
  telefoneEmpresa;
  enderecoEmpresa;
  constructor() {}

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.enderecoEmpresa = this.data.enderecoEmpresa;
    this.telefoneEmpresa = this.data.telefoneEmpresa;
    console.log(this.enderecoEmpresa, this.telefoneEmpresa);
  }

}
