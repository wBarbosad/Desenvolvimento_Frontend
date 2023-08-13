package com.lojavitti.lojavitti.model;

public class Produto {
    private String nome;
    private int estoque;
    private String descricao;

    private String imagem;
    private double preco;

    public Produto() {
    }

    public Produto(String nome, int estoque, String descricao, String imagem, double preco) {
        this.nome = nome;
        this.estoque = estoque;
        this.descricao = descricao;
        this.imagem = imagem;
        this.preco = preco;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getEstoque() {
        return estoque;
    }

    public void setEstoque(int estoque) {
        this.estoque = estoque;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }
}
