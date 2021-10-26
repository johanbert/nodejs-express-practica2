const { v1: uuidv1 } = require('uuid');
const express = require('express')
const app = express()
const port = 3000
const DB_USERS = []

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/', (req, res) => { // RECURSO /
    res.send('Hola mundo! El básico get')
})

app.get('/users', (req, res) => { // RECURSO /users
    res.json(DB_USERS)
})

app.post('/', (req, res) => {
    res.send('Hola mundo!, recibí una peticion o request POST')
})

app.post('/users', (req, res) => { // RECURSO /users
    req.body.id = uuidv1()
    DB_USERS.push(req.body)
    res.status(201).json({ id: req.body.id, message: 'RECURSO CREADO' })
})

app.put('/users/:id', (req, res) => {
    // const body = req.body;
    const { body } = req;
    body.id = req.params.id

    // DB_USERS.find((obj, i) => {
    //     if (obj.id === body.id) {
    //         DB_USER[i] = body
    //         return
    //     }
    // })
    const response = DB_USERS.find((obj, i) => obj.id === body.id ? DB_USERS[i] = body : false)

    // !response ? res.status(404).json({ message: `NO SE ENCONTRÓ EL ID:${body.id}` }) : res.status(200).json({ OK: true })
    if (!response)
        return res.status(404).json({ message: `NO SE ENCONTRÓ EL ID:${body.id}` })
    res.status(200).json({ OK: true })
})

app.patch('/users/:id', (req, res) => {
    const { body } = req;
    delete body.id;
    const response = DB_USERS.find((obj, i) => {
        return obj.id != req.params.id ? false : Array.from(Object.keys(body)).map((key) => DB_USERS[i][key] = body[key])
    })

    if (!response)
        return res.status(404).json({ message: `NO SE ENCONTRÓ EL ID:${req.params.id}` })
    res.status(200).json({ OK: true })
})

app.delete('/', (req, res) => {
    res.send('Hola mundo!, recibí una peticion o request DELETE')
})

const server = app.listen(port, () => console.log('Server ready', port))