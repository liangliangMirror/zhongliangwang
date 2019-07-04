const experss = require('express');
const app = experss();

const allRouter = require('./api/router');
app.use(experss.static('./'));
app.use(allRouter);
console.log(123)
app.listen(1922, () => { })