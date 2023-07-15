export class Animal{
  public _id: string;
  public nome: string;
  public raca: string;
  public peso: number;

  constructor(_id: string, nome: string, raca: string, peso: number){
    this._id = _id;
    this.nome = nome;
    this.peso = peso;
    this.raca = raca;
  }
}

