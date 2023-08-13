import { Component, OnInit } from '@angular/core';
import { LojaService } from 'src/app/loja.service';
import { Produto } from 'src/app/model/Produto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public produtos: Produto[] = [];

  constructor(private lojaService: LojaService){ }


  ngOnInit(): void {
    this.lojaService.getProduto().subscribe((response) => {
      console.log(response)
      this.produtos = response;
    })
  }

}
