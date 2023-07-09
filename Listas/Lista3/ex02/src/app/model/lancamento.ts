export class Lancamento{
  public nome: string;
  public dataLancamento: string;
  public categoria: string;
  public temporada: number;


  constructor(nome: string, dataLancamento: string, categoria: string, temporada: number){
    this.nome = nome;
    this.dataLancamento = dataLancamento;
    this.categoria = categoria;
    this.temporada = temporada;

  }
}
