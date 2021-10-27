const { v1: uuidv1 } = require('uuid');
const express = require('express')
const helmet = require('helmet')
const app = express()
const port = 3000
    // DATABASE IN MEMORY
const DB_USERS = []

app.use(helmet());
// ENDPOINTS

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// GET /users
app.get('/users', (req, res) => { // RECURSO /users
    res.json(DB_USERS)
})

// POST /users
app.post('/users', (req, res) => { // RECURSO /users
    req.body.id = uuidv1()
    DB_USERS.push(req.body)
    res.status(201).json({ id: req.body.id, message: 'RECURSO CREADO' })
})

// PUT /users/:id
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

// PATCH /users/:id
app.patch('/users/:id', (req, res) => {

    const { body } = req;
    delete body.id;
    const response = DB_USERS.find((obj, i) => {
        return obj.id != req.params.id ? false : Object.keys(body).map((key) => DB_USERS[i][key] = body[key])
    })

    if (!response)
        return res.status(404).json({ message: `NO SE ENCONTRÓ EL ID:${req.params.id}` })
    res.status(200).json({ OK: true })
})

// DELETE /users/:id

app.delete('/users/:id', (req, res) => {
    // req.params.id

    const response = DB_USERS.find((obj, i) => obj.id === req.params.id ? DB_USERS.splice(i, 1) : false)

    if (!response)
        return res.status(404).json({ message: `NO SE ENCONTRÓ EL ID:${req.params.id}` })
    res.status(200).json({ OK: true })
})


app.listen(port, () => console.log('Server ready', port))