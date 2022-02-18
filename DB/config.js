const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        
        await mongoose.connect(process.env.MONGO_ATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, (err, resp) => {
            if (err) throw err;
            console.log('Base de datos ONLINE');
        });
        
        
    } catch (error) {
        throw new Error('Error a la hora de iniciar la base de datos')
    }


}



module.exports = {
    dbConnection
}