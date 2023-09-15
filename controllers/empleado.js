const { json } = require('body-parser')
const {response} = require('express')
const bcrypt = require('bcrypt')


//Importación  de los modelos
const Usuario = require('../models/empleados')

//consultar
const empleadoGet = async(req, res = response) => {
    const {nombre} = req.query
    //const {nombre} = req.query //Desestructuración
    
    //Consultar todos los usuarios
    const usuarios = await Usuario.find()

    res.json({
        usuarios
    })
}

//Metodo POST de la api
const empleadoPost = async(req, res) => {
    let mensaje ='Inserción exitosa'
    const body= req.body //Captura de atributos
    try{
        const usuario = new Usuario(body)
        const salt = 10 //Número de vueltas
        usuario.password = bcrypt.hashSync(body.password,salt)
        await usuario.save() //esto inserta en la coleccion de base de datos en Mongo
    }catch(error){
        mensaje = error
        console.log(error)
    }
    
    res.json({
        msg: mensaje
    })
}


//modificación 
const empleadoPut = async(req, res) => {
    const {nombre, password, rol, estado} = req.query
    let mensaje ='Actualización exitosa'
    try{
        await Empleado.findOneAndUpdate({nombre: nombre}, {password: password},
            {rol: rol}, {estado: estado}) //esto inserta en la coleccion de base de datos en Mongo
    }catch(error){
        mensaje = 'Se presentaron problemas en la modificación'
        console.log(error)
    }
    
    res.json({
        msg: mensaje
    })
}


const empleadoDelete = async(req, res = response) => {
    const {_id} = req.query
    let mensaje = 'le eliminación se efectuó exitosamente.'

    try{
        const usuario = await Empleado.deleteOne({_id: _id})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminaion'
    }

    res.json({
        msg: mensaje
    })

}

module.exports = {
    empleadoGet,
    empleadoPost,
    empleadoPut,
    empleadoDelete
}