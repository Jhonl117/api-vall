const express = require('express')//Permite ejecutar el servidor de node
const cookieParser = require('cookie-parser')
const cors = require('cors')//Implementar seguridad
const bodyParser = require('body-parser')//recibir datos de servidor
const { dbConnection } = require('../database/config')

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT //capturando variables 
        this.UsuarioPath = '/api/empleado' //Ruta Pública
        this.authPath = '/api/auth'
        this.middlewares()
        this.conectarBD()
        this.routes()

    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }

    middlewares(){
        this.app.use(cookieParser());
        this.app.use(express.static(__dirname+"/public"));
        this.app.use(cors());
        this.app.use(bodyParser.json());
    }



    routes() {
        this.app.use(this.UsuarioPath, require('../routes/empleado'))

    }

    async conectarBD() {
        await dbConnection()//esperar la respuesta del servidor 
    }

}
module.exports = Server


//localhost:8082/api/auth/login