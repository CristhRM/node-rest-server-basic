const express = require("express");
var cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPaths = '/api/users';

        // Middleware
        this.middleware();
        // Routes
        this.routes();
    }

    middleware() {
        // CORS
        this.app.use(cors());
        // Public folder
        this.app.use(express.static('public'));
        // Body Parser
        this.app.use(express.json());
    }

    routes() {
        // Routes user
        this.app.use(this.usersPaths, require('../routes/users'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

module.exports = Server;