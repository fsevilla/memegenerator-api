const collection = require('./collection');

class BaseModel {

    collection;

    constructor(name) {
        this.collection = collection(name);
    }

    findAll(cb) {
        this.collection.find({}).toArray(cb);
    }

    findOne(filters) {
        return this.collection.findOne(filters);
    }

    insert() {}

    update() {}

    delete() {}
}

module.exports = BaseModel;