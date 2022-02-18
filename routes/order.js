const { Router } = require('express');

const {
    validaName
} = require('../middlewares');

const {
    getMessage,
    postMessage
} = require('../controllers/message');


const router = Router();


router.get('/:id', getMessage);

router.post('/', validaName, postMessage);



module.exports = router;