const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(saudacao('Hugo'))

app.use((req, res, next) => {
    console.log('Antes...')
    next()//neste caso, o next manda seguir e executar o proximo, caso contrario para aqui.
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    //let corpo = ''
    //req.on('data', function(parte) {
    //    corpo += parte
    //})

    //req.on('end', function() {
    //    res.send(corpo)
    //})
    res.send(JSON.stringify(req.body))
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})


app.use((req, res, next) => {
    res.json({
        data: [
            {id: 7, name: 'Ana', position: 3},
            {id: 34, name: 'Manuela', position: 5},
            {id: 68, name: 'Luisa', position: 9}
        ],
        count: 3,
        skip: 0,
        limit: 3,
        status: 200 
    })
    next()//neste caso, o next manda seguir e executar o proximo, caso contrario para aqui.
    //res.json([
    //    {id: 7, name: 'Ana', position: 3},
    //    {id: 34, name: 'Manuela', position: 5},
    //    {id: 68, name: 'Luisa', position: 9}
    //])


    //res.json({
    //    name: 'iPad 32Gb',
    //   price: 1899.00,
    //    discount: 0.12
    //})


    //res.send('Estou bem')
})

app.use((req, res, next) => {
    console.log('Depois...')
    next()//Nesta ultima poderiamos suprimir o next visto que é a última.
})


app.listen(3004, () => {
    console.log('backend executando2...')
})