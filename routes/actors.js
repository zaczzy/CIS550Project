var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../', 'views', 'actors.html'));
});

router.get('/getActors/:actorName', function (req, res) {
    var actorName = req.params.actorName;

});

module.exports = router;