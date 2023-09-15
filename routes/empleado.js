const {Router} = require('express')
//desestructuración. Extraer un atributo de un objeto

const route = Router()

//importar metdodos del controlador
const {empleadoGet, empleadoPost, empleadoPut, empleadoDelete} = require('../controllers/empleado')

route.get('/', empleadoGet) // este es para listar datos

route.post('/', empleadoPost) // este metodo es para insetar datos


route.put('/', empleadoPut) // este metodo es para MODIFICA datos

route.delete('/', empleadoDelete) // este metodo es para ELIMINempleado



module.exports = route