const {get, add, editAll, editSomeones, remove } = require('./controller'); // importando
const { test, validateId } = require('./middlewares');
const express = require('express')
const helmet = require('helmet');
const app = express()
const port = 3000

// DATABASE IN MEMORY

app.use(helmet());
// ENDPOINTS

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
//example global middleware
app.use(test)

// app.get('/users', get)
// app.post('/users', add)
app.route('/users')
    .get(get)
    .post(add);

// app.put('/users/:id', editAll)
// app.patch('/users/:id', editSomeones)
// app.delete('/users/:id', remove)
app.route('/users/:id')
    .all(validateId)
    .put(editAll)
    .patch(editSomeones)
    .delete(remove);

app.listen(port, () => console.log('Server ready', port))