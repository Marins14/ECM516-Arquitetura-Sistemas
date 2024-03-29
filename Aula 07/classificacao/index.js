require('dotenv').config()
const express = require('express')
const axios = require('axios')
const app = express()
const PORT = process.env.PORT
app.use(express.json())


const palavraChave = 'importante'
const funcoes = {
    ObservacaoCriada: (observacao)=>{
        //console.log(observacao);
        observacao.status = observacao.texto.includes(palavraChave) ? 
        'importante': 
        'comum'
        //console.log(observacao);
    axios.post('http://barramento-de-eventos-service:10000/eventos',{
        tipo: 'ObservacaoClassificada',
        dados: observacao
    })
    }
}
app.post('/eventos',(req,res)=>{
    try{
        const evento = req.body
    //callable
    funcoes[evento.tipo](evento.dados)

    }
    catch (e){
    }
    res.status(200).json({msg: 'Ok'})
})

app.listen(PORT || 7000,()=>console.log(`Classificação. Porta ${PORT}`))

