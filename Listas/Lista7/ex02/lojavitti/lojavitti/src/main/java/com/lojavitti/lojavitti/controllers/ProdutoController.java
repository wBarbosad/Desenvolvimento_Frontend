package com.lojavitti.lojavitti.controllers;

import com.lojavitti.lojavitti.model.Produto;
import com.lojavitti.lojavitti.services.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/produtos")
@CrossOrigin("*")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @GetMapping
    ResponseEntity<List<Produto>> getProduto(){
        return ResponseEntity.status(HttpStatus.OK).body(produtoService.getProdutos());
    }

}
