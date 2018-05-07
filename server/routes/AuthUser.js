const express = require('express');//express module
const router = express.Router();//express-router module
var path = require('path');
const MongoClient = require('mongodb').MongoClient;//mongo module and client
const ObjectID = require('mongodb').ObjectID;//object ID-useful for data sorting
let response={
    status: 200,
    data: [],
    message: null
};
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/mydb', (err, client) => {
    if (err) return console.log(err);
    
    let db = client.db('mydb');
    closure(db);
    });
    };
router.get('/UserInfo/Admins', (req, res) => {
        connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                res.json(users);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
}); 
module.exports = router;