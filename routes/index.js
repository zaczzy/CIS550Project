var express = require('express');
var router = express.Router();
var path = require('path');

// Connect string to MySQL
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'mydbfeedmenews.cffkuryafwgu.us-east-1.rds.amazonaws.com',
    user: 'feedmenews',
    password: '12345678',
    port: '3306',
    database: 'news'
});
connection.connect(function (err) {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }

    console.log('Connected to database.');
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

router.get('/data/:peopleId', function (req, res) {
    var query = 'SELECT * from people';
    var peopleId = req.params.peopleId;
    if (peopleId !== 'undefined') query = query + ' where people_id =' + peopleId + '';
    // console.log(query);
    connection.query(query, function (err, rows, fields) {
        if (err) console.log(err);
        else {
            res.json(rows);
        }
    });
});



module.exports = router;