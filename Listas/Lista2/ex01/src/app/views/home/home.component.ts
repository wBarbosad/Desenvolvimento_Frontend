import { Component } from '@angular/core';
import Gestor from '../../models/Gestor'
import Analista from '../../models/Analista'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public analistas: Analista[] = new Array<Analista>();
  public gestor: Gestor = new Gestor("Maria", 192076, "Gestora de TI", []);

  constructor(){
    this.analistas.push(new Analista("Thompsom", 121314, "Analista de infraesturutra", this.gestor.nome))
    this.analistas.push(new Analista("Goku", 4, "Lutador de malware", this.gestor.nome))


    this.gestor.nomeSubordinados = this.analistas.map(analista => analista.nome);
  }
}
