const Usuario = require('../models/empleados')
const {response} = require('express')
const bcrypt = require('bycrypt')

async function comparePassword(passwordForm, passwordBD){
    const result = await bcrypt.compare(passwordForm, passwordBD);
    return result;
}

const login = async(req, res) => {
    const {nombre, password} = req.body

    const  usuarios = await Usuario.findOne({nombre})
    try{
        if(!usuarios){//si no encontró el nombre
            return res.status(400).json({
                msg: 'Este usuario no existe' 
            })
        }
        if(usuarios.estado == false){
            return res.status(400).json({
                msg: 'Usuario está inactivo' 
            })
        }
        
        resultado = await comparePassword(password, usuarios.password)

        if(usuarios.estado == true){
            return res.status(200).json({
                msg: 'Bienvenido' 
            })
        }
        else{
            return res.status(400).json({
                msg: 'Usuario y/o password incorrecto'
            })
        }
    } catch (error){
        return res.status(400).json({
            msg: 'Apreciado usuario contacte al administrador.'
        })
    }
}


module.exports = {

    login
}