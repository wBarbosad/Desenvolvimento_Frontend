export class Produto{
  public nome: string;
  public descricao: string;
  public imagem: string;
  public valor: number;
  public categoria: string;


  constructor(nome: string, descricao: string, imagem: string, valor: number, categoria: string){
      this.nome = nome;
      this.descricao = descricao;
      this.imagem = imagem;
      this.valor = valor;
      this.categoria = categoria;
    }
}
