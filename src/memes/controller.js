const { collection } = require('../../database');
const Meme = require('./model');
const { ObjectId } = require('mongodb');

class MemesController {

    getAll(req, res) {
        const meme = new Meme();
        meme.findAll((err, results) => {
            if(err) {
                res.send([]);
            } else {
                res.send(results);
            }
        });
    }

    getOne(req, res) {
        const meme = new Meme();
        const id = req.params.id;
        meme.findOne({_id: ObjectId(id)}).then((result) => {
            console.log(result);
            res.send(result);
        })
    }

    create(req, res) {
        console.log('Archivo', req.file, req.body);
        res.send('created');    
    }
    
}

module.exports = new MemesController();
