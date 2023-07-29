import { Produto } from './../model/produto';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProdutoService{

  constructor(private http: HttpClient){ }

  buscarProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>("http://localhost:8081/listar-produtos");
  }

   adicionarProdutos(produto: Produto): Observable<String> {
    return this.http.post<String>("http://localhost:8081/adicionar-produtos", produto)
  }

}
