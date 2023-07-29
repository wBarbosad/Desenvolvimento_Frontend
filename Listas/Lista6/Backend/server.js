const express = require('express')
const mongoose = require("mongoose")
const app = express()
const port = 8081
const connectionString = "mongodb+srv://admin:teste123@datebase.xlucmme.mongodb.net/"
var cors = require('cors');
app.use(cors());
const Produto = require('./models/produto.js')

app.use(express.json())


app.get('/listar-produtos', async (req, res) => {
    const produto = await Produto.find()
   return res.status(200).json( produto )
})

app.post('/adicionar-produtos', async (req, res) => {
    const { nome, descricao, imagem, valor, categoria } = req.body

    let produto = {
        nome,
        descricao,
        imagem,
        valor,
        categoria
    }
    try{
        await Produto.create(produto)
        return res.status(201).json({ message: "Produto cadastrado com sucesso!"})
    }catch(error){
        return res.status(500).json({ message: error.message})
    }
})

mongoose.connect(connectionString, { 
    dbName: "ecommerce_Produto"
}).then(() => {
    
    console.log("Conexão estabelecida!")
    console.log(`Servidor rodando http://localhost:${port}`)
    app.listen(port)

}).catch((error) => {
    console.log(error)
})