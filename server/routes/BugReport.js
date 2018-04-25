const express = require('express');//express module
const router = express.Router();//express-router module
const MongoClient = require('mongodb').MongoClient;//mongo module and client
const ObjectID = require('mongodb').ObjectID;//object ID-useful for data sorting

//connect block
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/mydb', (err, client) => {
    if (err) return console.log(err);
    
    let db = client.db('mydb');
    closure(db);
    });
    };

router.post('/SaveReport', (req, res) => {
    var newReport = req.body;
    console.log(newReport);
    connection((db)=>{
        db.collection('BugReports').insert(newReport,function(err,res){
            if(err) throw err;
            console.log("New Report In DB");
        });
    })
    
}); 
let response={
    status: 200,
    data: [],
    message: null
};
router.get('/AllBugs', (req, res) => {
    connection((db) => {
        db.collection('BugReports')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});
module.exports = router;