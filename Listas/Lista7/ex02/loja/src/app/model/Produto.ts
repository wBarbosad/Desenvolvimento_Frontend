export class Produto{
  public nome: string;
  public estoque: number;
  public descricao: string;
  public imagem: string;
  public preco: number;

  constructor(nome: string, estoque: number, descricao: string, imagem: string, preco: number){
    this.nome = nome;
    this.estoque = estoque;
    this.descricao = descricao;
    this.imagem = imagem;
    this.preco = preco;
  }
}
