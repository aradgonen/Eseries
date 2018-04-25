// const express = require('express');//express module
// const router = express.Router();//express-router module
// const MongoClient = require('mongodb').MongoClient;//mongo module and client
// var dataToClient;
// var url = 'mongodb://localhost:27017/mydb';
// function readFromDB (collection_name)
// {
//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//        db.collection(collection_name).findOne({}, function (err, result) {
//             if(err) throw err;
//             db.close();
//            console.log("fromDB:Recived Data From DB");
//            dataToClient=result;
//            if(!dataToClient){
//                console.log(dataToClient);
//                console.log("________----------******E R R O R******-----_________");}
//        });
//    });
// }
// router.get('/data', (req, response) => {
//     console.log("client called me");
//     readFromDB("data");
//     if(dataToClient)
//     {   
//         console.log("put data in response");
//         response=dataToClient;
//     }
//     else
//     {
//         respone="cant help you";
//     }
// });
// module.exports = router;
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
//error handling
const sendError = (err, res)=>{
    response.status = 501;//status code
    response.message = typeof err =='object' ? err.message : err; //the error massage that include the error information
    res.status(501).json(response);//return the status code and message
};

//response handling - the structure
let response={
    status: 200,
    data: [],
    message: null
};

//get users
router.get('/data', (req, res) => {
    connection((db) => {
        db.collection('data')
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