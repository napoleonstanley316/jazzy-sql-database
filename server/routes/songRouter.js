
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')




router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "song" ORDER BY "title";'
    pool.query(queryText)
        .then((result) => {
            console.log(result);
            // only send rows, not entire result
            res.send(result.rows)
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
})


router.post('/', (req, res) => {
    console.log(req.body);
    // send body data to database
    // prepared statement
    const queryText = `INSERT INTO "song" ("title", "length", "released")
    VALUES ($1, $2, $3);`

    pool.query(queryText, [req.body.title, req.body.length, req.body.released])
        .then((result) => {
            console.log(result);
            res.sendStatus(201)
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
})


module.exports = router;