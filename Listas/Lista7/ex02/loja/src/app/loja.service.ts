import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Produto } from './model/Produto';


@Injectable({
  providedIn: 'root'
})
export class LojaService {

  constructor(private http: HttpClient) { }

  getProduto(): Observable<Produto[]>{
    return this.http.get<Produto[]>("http://localhost:8080/produtos")
  }

}
