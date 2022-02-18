const { request, response } = require("express");


const validaName = (req = request, res = response, next) => {

    const { nombre, apellido, correo, mensaje } = req.body;

    if(!nombre || !apellido) return res.status(400).json({ msg: 'Son obligatorios el nombre y apellido / verificar por favor' });
    
    if(!correo || !mensaje) return res.status(400).json({ msg: 'Son obligatorios el correo y mensaje / verificar por favor' });

    next();

}





module.exports = {
    validaName,
}