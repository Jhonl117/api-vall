const { Router } = require('express')
const router = Router()//obteer la funcion Router

const { login } = require('../controllers/auth')

routter.post('/login', login)

modele.exports = router