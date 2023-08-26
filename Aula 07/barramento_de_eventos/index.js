require('dotenv').config()
const { default: axios } = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 10000

const eventos =[]

// localhost:10000/eventos
app.post('/eventos', async(req,res)=>{
    // {tipo: 'LembreteCriado' , dado: {id:1, texto = "fazer Cafe"}}
    const evento = req.body
    eventos.push(evento)
    //lembretes
    try{
       await axios.post('http://localhost:4000/eventos',evento)
    }catch(e){}
    //observacoes
    try{
        await axios.post('http://localhost:5000/eventos',evento)
    }catch(e){}
    //consulta
    try{
        await axios.post('http://localhost:6000/eventos',evento)
    }catch(e){}
    //classificacao
    try{
       await axios.post('http://localhost:7000/eventos',evento)
    }catch(e){}

    res.status(200).send({msg: 'ok'})
})
app.get('/eventos',(req,res)=>{
    res.json(eventos)
})

app.listen(
    PORT,
    () => console.log(`Barramento ${PORT}`)
)

