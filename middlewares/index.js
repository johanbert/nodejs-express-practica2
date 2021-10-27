const { getUsers } = require('../controller/index')

const test = (req, res, next) => {
    console.log('HOLA, PASASTE POR AQUI >.> sigue tu camino ')
    next()
}

const validateId = (req, res, next) => {
    const DB_USERS = getUsers()
    const hasId = DB_USERS.find((obj, i) => obj.id === req.body.id ? true : false)

    if (!hasId)
        return res.status(404).json({ message: `MIDDLEWARE: NO SE ENCONTRÓ EL ID ${req.params.id}` })
    next()
}

module.exports = { test, validateId }