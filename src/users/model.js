const BaseModel = require('./../../database/model');

class User extends BaseModel {

    constructor() {
        super('users');
    }

    login(req, res) {}
    
}

module.exports = User;