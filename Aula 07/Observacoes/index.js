// Assim que importa o .env
require('dotenv').config()
const express = require('express')
const {v4: uuidv4} = require('uuid')
const app = express()
app.use(express.json())
const observacoesPorLembreteID = {}
const axios = require('axios')

// :id significa que vai alterar a cada iteração 
app.get('/lembretes/:id/observacoes', (req,res)=>{
    res.json(observacoesPorLembreteID[req.params.id] || [])
})
// observação : {texto: 'Whatever'}
app.post('/lembretes/:id/observacoes', (req,res)=>{
    const idObs = uuidv4()
    const {texto } = req.body
    const obsDoLembrete = observacoesPorLembreteID[req.params.id] || []
    obsDoLembrete.push({id: idObs, texto})
    observacoesPorLembreteID[req.params.id] = obsDoLembrete 
    // cod 201 significa que criou e esta ok 
    res.status(201).json(obsDoLembrete)
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>console.log(`Observações. ${PORT}`))