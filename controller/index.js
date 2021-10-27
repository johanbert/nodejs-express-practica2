const { v1: uuidv1 } = require('uuid');
const DB_USERS = []

const get = (req, res) => {

    res.status(200).json(DB_USERS)
}

const add = (req, res) => { // RECURSO /users
    req.body.id = uuidv1()
    DB_USERS.push(req.body)

    res.status(201).json({ id: req.body.id, message: 'RECURSO CREADO' })
}

const editAll = (req, res) => {
    // const body = req.body;
    const { body } = req;
    body.id = req.params.id

    // DB_USERS.find((obj, i) => {
    //     if (obj.id === body.id) {
    //         DB_USER[i] = body
    //         return
    //     }
    // })
    DB_USERS.find((obj, i) => obj.id === body.id ? DB_USERS[i] = body : false)

    res.status(200).json({ OK: true })
}

const editSomeones = (req, res) => {
    const { body } = req;
    delete body.id;
    DB_USERS.find((obj, i) => {
        return obj.id != req.params.id ? false : Object.keys(body).map((key) => DB_USERS[i][key] = body[key])
    })

    res.status(200).json({ OK: true })
}
const remove = (req, res) => {
    DB_USERS.find((obj, i) => obj.id === req.params.id ? DB_USERS.splice(i, 1) : false)

    res.status(200).json({ OK: true })
}

const getUsers = () => {

    return DB_USERS;
}

module.exports = {get, add, editAll, editSomeones, remove, getUsers }