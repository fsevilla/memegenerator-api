const { collection } = require('../../database');
const User = require('./model');
const { ObjectId } = require('mongodb');

class UsersController {

    getAll(req, res) {
        const user = new User();
        user.findAll((err, results) => {
            if(err) {
                res.send([]);
            } else {
                res.send(results);
            }
        });
    }

    getOne(req, res) {
        const user = new User();
        const id = req.params.id;
        user.findOne({_id: ObjectId(id)}).then((result) => {
            console.log(result);
            res.send(result);
        })
    }

    getByEmail(req, res) {
        const user = new User();
        const email = req.query.email;
        user.findOne({email: email}).then((result) => {
            res.send(result);
        })
    }
    
}

module.exports = new UsersController();
