package com.lojavitti.lojavitti.repository;

import com.lojavitti.lojavitti.model.Produto;
import org.springframework.stereotype.Controller;

import java.util.ArrayList;
import java.util.List;

@Controller
public class BancoDeDados {
    private List<Produto> produto = new ArrayList<>();

    public BancoDeDados() {
        this.produto.add(new Produto("Pedra rolada", 10, "Rolada", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7v73BdkRahwiq26I3jFf4DJK3E6sla6Mdw&usqp=CAU", 5));
    }

    public List<Produto> getAll(){
        return produto;
    }
}
