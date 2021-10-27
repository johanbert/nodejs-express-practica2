const { v1: uuidv1 } = require('uuid');
const express = require('express')
const helmet = require('helmet');
const {get, add, editAll, editSomeones, remove } = require('./controller'); // importando
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

app.use((req, res, next) => {
    console.log('HOLA, PASASTE POR AQUI >.> sigue tu camino ')
    next()
})

// app.get('/users', get)
// app.post('/users', add)
app.route('/users')
    .get(get)
    .post(add);

// app.put('/users/:id', editAll)
// app.patch('/users/:id', editSomeones)
// app.delete('/users/:id', remove)
app.route('/users/:id')
    .put(editAll)
    .patch(editSomeones)
    .delete(remove);


app.route('/book')
    .get(function(req, res) {
        res.send('Get a random book');
    })
    .post(function(req, res) {
        res.send('Add a book');
    })
    .put(function(req, res) {
        res.send('Update the book');
    });

app.listen(port, () => console.log('Server ready', port))