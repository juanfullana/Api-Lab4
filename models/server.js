const express = require('express');
const cors = require('cors');


class Server{

    constructor(){
        this.app = express();
        this.middleware();
        this.router();
        this.port = process.env.PORT;
    }

    middleware(){
        this.app.use(cors());
        this.app.use(express.static('public'));
    }

    router(){
        this.app.use('/NASA',require('../routes/NASA'));

        this.app.all('*', (req, res) =>{
            res.send('404 PAGINA NO ENCONTRADA')
        })
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }
}

module.exports = Server;
