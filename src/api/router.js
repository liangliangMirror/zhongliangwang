const express = require('express');
const router = express.Router();
const goodsRouter = require('./goods');
router.use(express.json(), express.urlencoded({ extended: false }));


router.use('/goods', goodsRouter);


module.exports = router;