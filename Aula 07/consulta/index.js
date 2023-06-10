require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

const baseConsulta = {}

// LembreteCriado: ()=>{}
//ObservacaoCriadas: ()=>{}

const funcoes = {
    LembreteCriado: (lembrete) => {
        baseConsulta[lembrete.id] = lembrete
    },
    ObservacaoCriada: (observacao) => {
        //pegar a colecao de observacoes criadas associada ao id de lembrete da observacao recebida se ela existir senao pegar uma colecao vazia 
        //adicionar a observacao recebida a colecao 
        //atualizar a colecao de observacoes associada ao id de lembrete da observacao recebida
        const observacoes = baseConsulta[observacao.lembreteId]['observacoes'] || []
        observacoes.push(observacao)
        baseConsulta[observacao.lembreteId]['observacoes'] = observacoes
    }
}