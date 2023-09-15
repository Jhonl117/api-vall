const { Schema, model } = require('mongoose');

const EmpleadoSchema = Schema({
    nombres: {
        type: String,
        required: [true, 'Los nombres son obligatorios']
    },
    apellidos: {
        type: String,
        required: [true, 'Los apellidos son obligatorios']
    },
    telefono: {
        type: String,
        required: [true, 'El teléfono es obligatorio']
    },
    tipo_documento: {
        type: String,
        required: [true, 'El tipo de documento es obligatorio'],
        enum: ['DNI', 'Pasaporte', 'Cédula', 'Otro'] 
    },
    numero_documento: {
        type: String,
        required: [true, 'El número de documento es obligatorio'],
        unique: true
    },
    genero: {
        type: String,
        enum: ['Masculino', 'Femenino', 'Otro'] // podemos ajustar los valores permitidos según tus necesidades
    },
    direccion: {
        type: String,
        required: [true, 'La dirección es obligatoria']
    },
    fecha_nacimiento: {
        type: Date,
        required: [true, 'La fecha de nacimiento es obligatoria']
    },
    rol: {
        type: String,
        required: [true, 'El rol es obligatorio'],
        enum: ['Admin', 'Usuario'] // podemos ajustar los roles permitidos según tus necesidades
    },
    estado: {
        type: Boolean,
        default: true
    }
});

// Exportar la función UsuarioSchema
module.exports = model('Empleado', EmpleadoSchema);