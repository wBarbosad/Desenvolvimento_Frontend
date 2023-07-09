export class Anime{
  public _id: number;
  public nome: string;
  public ano: number;
  public quantidadeDeTemporada: number;
  public img: string;

  constructor(id: number, nome: string, ano: number, quantidadeDeTemporada: number, img: string){
    this._id = id;
    this.nome = nome;
    this.ano = ano;
    this.quantidadeDeTemporada = quantidadeDeTemporada;
    this.img = img;
  }

}
