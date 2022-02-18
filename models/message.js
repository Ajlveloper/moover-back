const { Schema, model } = require('mongoose');


const MessageSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
    },
    mensaje: {
        type: String,
        required: [true, 'El mensaje es requerido']
    },
    estado: {
        type: Boolean,
        require: [true, 'El esstado es requerido']
    }
}); 

MessageSchema.methods.toJSON = function() {
    const { __v,  _id, ...usuario  } = this.toObject();

    usuario.uid = _id;
    return usuario;
}


module.exports = model('Message', MessageSchema);