const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connect
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db'
});

con.connect((error) => {
    if (error) {
        console.error('Error', error)
    } else {
        console.log('connected');
    }
});

app.get('/cats', (req, res) => {
    con.query('SELECT * FROM cats', (error, rows) => {
        if (error) {
            console.error('Error', error);
        }
        console.log(rows);
        res.json(rows);
    });
});
const PORT = 4547;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
