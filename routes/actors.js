var express = require('express');
var router = express.Router();
var path = require('path');
var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://cis550mongo:cis550project@mongocluster-shard-00-00-5qypc.mongodb.net:27017," +
    "mongocluster-shard-00-01-5qypc.mongodb.net:27017," +
    "mongocluster-shard-00-02-5qypc.mongodb.net:27017/actors?ssl=true&replicaSet=mongocluster-shard-0&authSource=admin";

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../', 'views', 'actors.html'));
});

router.get('/getActors/:actorName/:actorSex', function (req, res) {
    var actorName = req.params.actorName;
    var actorSex = req.params.actorSex;
    MongoClient.connect(uri, function(err, db) {
        assert.equal(null, err);
        db.collection(actorSex).find()
    });
    res.err("Not implemented!")
});

module.exports = router;