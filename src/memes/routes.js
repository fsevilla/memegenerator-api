const router = require('express').Router();
const archivo = require('./../middlewares/files');

const controller = require('./controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.post('/', archivo.single('image'), controller.create);


module.exports = router;