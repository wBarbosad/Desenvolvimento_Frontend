import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.css']
})
export class ListagemProdutoComponent implements OnInit{

  public produto: Produto[] = [];

  constructor(private produtoService: ProdutoService){ }

  ngOnInit(): void {
    this.produtoService.buscarProdutos().subscribe((response)=> {
      console.log("response: ")
      console.log(response)

      return this.produto = response

    })
  }


}
