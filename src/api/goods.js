const express = require('express');
const router = express.Router();
const { df } = require('./df');
const query = require('./mysql');
router.get('/cha', (req, res) => {
    let { gid } = req.query;
    query(`SELECT * FROM erjieduan_list WHERE gid=${gid}`)
        .then(data => {
            res.send(df({ data }));
        })

})
module.exports = router;