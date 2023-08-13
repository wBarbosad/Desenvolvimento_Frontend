package com.lojavitti.lojavitti.services;

import com.lojavitti.lojavitti.model.Produto;
import com.lojavitti.lojavitti.repository.BancoDeDados;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {

    @Autowired
    private BancoDeDados bancoDeDados;

    public List<Produto> getProdutos(){
        return bancoDeDados.getAll();
    }
}
