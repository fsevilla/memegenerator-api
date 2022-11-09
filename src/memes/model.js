const BaseModel = require('./../../database/model');

class Meme extends BaseModel {

    constructor() {
        super('memes');
    }

    login(req, res) {}
    
}

module.exports = Meme;