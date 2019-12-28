const express = require('express')
const path = require('path')
const knex = require('knex')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3002
const connection = knex({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'masterkey',
        database: 'cadastro'
    }
})
const dependencies = {
    connection
}

const pessoas = require('./routes/pessoas')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => res.render('home'))
app.use('/pessoas', pessoas(dependencies))

// view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen(port, () => console.log('Crud listening on port: ' + port))
