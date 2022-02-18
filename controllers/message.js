// const Usuario = require('../models/usuario'); Se puede importar tambien así
const { Message } = require('../models');

const getMessage = async (req, res) => {
    const { id } = req.params;
    const message = await Message.findById(id);

    res.json(message);
}



const postMessage = async (req, res) => {

    const { ...message } = req.body

    const newMessage = new Message({...message, estado: true});

    await newMessage.save();

    res.status(201).json(newMessage);
}


module.exports = {
    getMessage,
    postMessage
}