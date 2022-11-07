const database = require('./database');

module.exports = function(collectionName) {
    if(collectionName) {
        const collection = database().collection(collectionName);
        return collection;
    } else {
        return null;
    }

};
