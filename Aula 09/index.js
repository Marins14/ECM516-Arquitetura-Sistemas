require('dotenv').config()
const {
    PG_HOST,
    PG_USER,
    PG_PASSWORD,
    PG_DATABASE,
    PG_PORT,
    PORT
} = process.env
const { Pool } = require('pg')
const express = require('express')
const { ssl } = require('pg/lib/defaults')
const app = express()
app.use(express.json())

const pool = new Pool(
    {
        host: PG_HOST,
        user: PG_USER,
        password: PG_PASSWORD,
        database: PG_DATABASE,
        port: PG_PORT
    } 
    ) 
    
pool.on('error', (err, client) => {
        console.error('Erro inesperado', err)
        process.exit(-1)
})

app.get('/medicos', (req,res) => {
    // const client = new Client({
    //     host: PG_HOST,
    //     user: PG_USER,
    //     password: PG_PASSWORD,
    //     database: PG_DATABASE,
    //     port: PG_PORT
    // })
    pool.query('SELECT * FROM tb_medico')
    .then(db_Result => {
        res.status(200).json(db_Result.rows)
    })
    .catch(e => {
        console.log(e)
        res.status(500).end()
    })
})

app.get('/paciente', (req,res) => {
    // const client = new Client({
    //     host: PG_HOST,
    //     user: PG_USER,
    //     password: PG_PASSWORD,
    //     database: PG_DATABASE,
    //     port: PG_PORT
    //     })
    // client.connect()
    // client.query('SELECT * FROM tb_paciente')
    pool.query('SELECT * FROM tb_paciente')
    .then(db_Result => {
        res.status(200).json(db_Result.rows)
    })
    .catch(e => {
        console.log(e)
        res.status(500).end()
    })
})

app.post('/adicionar-medico', (req,res) => {
    // const client = new Client({
    //     host: PG_HOST,
    //     user: PG_USER,
    //     password: PG_PASSWORD,
    //     database: PG_DATABASE,
    //     port: PG_PORT
    //     })
    const crm = req.body.crm
    const nome = req.body.nome 
    //client.connect()
    pool.query(`INSERT INTO tb_medico (crm,nome) VALUES ($1,$2);`,[crm,nome])
    .then(db_Result=>{
        console.log(db_Result)
        res.status(200).json("Funcionou")
    })
    .catch(e => {
        console.log(e)
        res.status(500).end()
    })

})

    
app.listen(
        PORT,
        () => console.log(`Servidor OK. Porta: ${PORT}`)
)
    



