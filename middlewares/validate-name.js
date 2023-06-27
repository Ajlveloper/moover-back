const { ObjectId } = require('mongoose').Types
const { request, response } = require("express");


const validaName = (req = request, res = response, next) => {

    const { nombre, apellido, correo, mensaje } = req.body;

    if(!nombre || !apellido) return res.status(400).json({ msg: 'Son obligatorios el nombre y apellido / verificar por favor' });
    
    if(!correo || !mensaje) return res.status(400).json({ msg: 'Son obligatorios el correo y mensaje / verificar por favor' });

    next();

}

const isValidId = (req = request, res = response, next) => {
    const { id } = req.params;

    if(!id) return res.status(400).json({ msg: 'Es obligatorio el id por favor' });

    if (!ObjectId.isValid(id)) return res.status(400).json({ msg: `El valor "${id}" no es un ObjectId válido` });

    next();
}





module.exports = {
    validaName,
    isValidId,
}