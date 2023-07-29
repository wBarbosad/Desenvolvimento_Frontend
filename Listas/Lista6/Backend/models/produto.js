
const mongoose = require("mongoose")

const ProdutoShema = mongoose.Schema({
    nome: {type: String, required: true},
    descricao: {type: String, required: true},
    imagem: {type: String, required: true},
    valor: {type: Number, required: true},
    categoria: {type: String, required: true}
})

const Produto = mongoose.model('produtos', ProdutoShema)

module.exports = Produto