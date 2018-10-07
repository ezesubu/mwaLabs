const {Router} = require('express');
const controller = require('./controller')

const router = new Router();

router.get('/', controller.all)
router.post('/',controller.create)
router.put('/:id',controller.update)
router.delete('/:id',controller.delete)

module.exports = router