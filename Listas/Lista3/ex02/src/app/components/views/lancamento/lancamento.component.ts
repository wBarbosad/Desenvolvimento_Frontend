import { Component } from '@angular/core';
import { Lancamento } from 'src/app/model/lancamento';

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent {
  public novosLancamento: Lancamento[] = new Array<Lancamento>()

  constructor(){
    this.novosLancamento.push(new Lancamento("Hunter x Hunter - A jornada", "15/02/2024", "Ação, Aventura, etc", 6))
    this.novosLancamento.push(new Lancamento("Attack on Titan", "20/04/2024", "Ação, Aventura, etc", 5))
  }
}
