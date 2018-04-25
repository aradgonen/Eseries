const express = require('express');//express module
const router = express.Router();//express-router module
const MongoClient = require('mongodb').MongoClient;//mongo module and client
var dataToClient;
var url = 'mongodb://localhost:27017/mydb';
function writeToDB (DataToDB,collection_name)
    {
        if(DataToDB!=undefined)
        {
            MongoClient.connect(url, function (err, db) {
                if (err) throw err;
                db.collection(collection_name).count(function(err,count){
                    if(count!=0)
                        {
                            db.collection(collection_name).drop(function(err,reply){
                                if(err) throw err;
                            });
                            db.collection(collection_name).insert(DataToDB,function(err,res){
                                if(err) throw err;
                            });
                            console.log("drop and insert");
                        }
                        else
                        {
                            db.collection(collection_name).insert(DataToDB,function(err,res){
                                if(err) throw err;
                            });
                            console.log("insert");
                        }
                });
                // db.collection(collection_name).update(DataToDB, DataToDB,{multi:true}, function (err, res) {
                //     if (err) {
                //         throw err;
                //     }
                //     console.log("New Data To DB");
                //     db.close();
                // });
            });
    }
    else
    {
        console.log("ERROR - GOT UNDEFINED");
    }
    }
module.exports = {
    toDB: function(DataToDB)
    {
       writeToDB(DataToDB,"data");
    }
};