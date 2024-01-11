import { Pensamento } from './../pensamento';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo:'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
  }  

  constructor() { }

  ngOnInit(): void {
  }


// alterado
larguraPensamento(): string {
  if (this.pensamento && this.pensamento.conteudo && this.pensamento.conteudo.length >= 256) {
    return 'pensamento-g';
  }
  return 'pensamento-p';
}


}
