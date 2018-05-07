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

router.get('/UserInfo', (req, res,next) => {
    var nodeSSPI = require('node-sspi');
    var nodeSSPIObj = new nodeSSPI({
        retrieveGroups: true
    });
    nodeSSPIObj.authenticate(req, res, function(err){
        res.finished || next()
    });
        var userName=req.connection.user;
        if(userName==undefined)
            return;
        var userSid=req.connection.userSid;
        if(userSid==undefined)
            return;
        var user = [];
        var groups=[];
    if (req.connection.userGroups) {
      for (var i in req.connection.userGroups) {
          if(req.connection.userGroups[i]==undefined)
            return;
        groups.push(req.connection.userGroups[i]);
      }
    }
    user.push({UserName:userName,UserSID:userSid,userGroups:groups});
    response.data = user;
    if(res.statusCode==200)
    {      
        console.log(res.statusCode);    
        res.json(response);
    }
}); 
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