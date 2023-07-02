import { Component } from '@angular/core';
import Gestor from './models/Gestor';
import Analista from './models/Analista';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public analistas: Analista[] = new Array<Analista>();
  public gestor: Gestor = new Gestor("Maria", 192076, "Gestora de TI", []);

  constructor(){
    this.analistas.push(new Analista("Thompsom", 121314, "Analista de infraesturutra", this.gestor.nome))
    this.analistas.push(new Analista("Goku", 4, "Lutador de malware", this.gestor.nome))


    this.gestor.nomeSubordinados = this.analistas.map(analista => analista.nome);
  }

}
