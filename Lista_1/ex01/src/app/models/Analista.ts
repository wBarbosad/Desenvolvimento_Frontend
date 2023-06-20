import Funcionario from "./Funcionario";

export default class Analista implements Funcionario{
  nome: string;
  funcional: number;
  cargo: string;
  nomeGestor: string;


  constructor(nome: string, funcional: number, cargo: string, nomeGestor: string){
    this.nome = nome;
    this.funcional = funcional;
    this.cargo = cargo;
    this.nomeGestor = nomeGestor;
  }


}
