const express = require("express");
const cors = require('cors');
const morgan = require('morgan')
const { dbConnection } = require("../DB/config");


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            messagePath: '/api/order'
        }

        this.middlewares(); 

        this.connectDB();

        this.routes();
    }

    middlewares() {

        this.app.use(cors());

        this.app.use(morgan('dev'))

        this.app.use(express.json());

        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use(this.paths.messagePath, require('../routes/order'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Runing the port ${this.port}`);
        });
    }

    async connectDB() {
        await dbConnection();
    }


}

module.exports = Server;