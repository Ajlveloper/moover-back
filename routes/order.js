const { Router } = require('express');

const {
    validaName,
    isValidId
} = require('../middlewares');

const {
    getMessage,
    postMessage
} = require('../controllers/message');


const router = Router();


router.get('/:id', isValidId, getMessage);

router.post('/', validaName, postMessage);



module.exports = router;