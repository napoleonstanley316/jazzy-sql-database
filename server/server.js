const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));


// Routes folder that houses GET/POST routes
let jazzyRouter = require('./routes/jazzyRouter');
app.use('/jazzyRouter', jazzyRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

