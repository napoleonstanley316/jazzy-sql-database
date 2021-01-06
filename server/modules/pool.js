const pg = require('pg');

const Pool = pg.Pool
const pool = new Pool({
    database: "jazzy_sql",
    host: 'localhost',
    port: 5432
});


// helper function that lets you know you're connected to server
pool.on('connect', () => {
    console.log('PG CONNECTED')
});

module.exports = pool;