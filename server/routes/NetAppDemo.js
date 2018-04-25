const express = require('express');//express module
const request = require('request');
var data={};
const mongo = require('./Mongo');
function get_hardware_inventory(store_hardware_inventory)
{
    request('http://localhost:3001/storage-systems/5/hardware-inventory', {json: true}, (err, res, body) => {
        if (err) {
            return console.log(err+"Im HereA");
        }
        console.log("got hardware-inventory");
        return store_hardware_inventory(body);
    });
}
function get_storage_systems(store_storage_systems)
{
    request('http://localhost:3001/storage-systems', {json: true}, (err, res, body) => {
        if (err) {
            return console.log(err+"Im HereB");
        }
        console.log("got storage-systems");
       return store_storage_systems(body);
    });
}
function get_failures(store_failures)
{
    request('http://localhost:3001/storage-systems/5/failures', {json: true}, (err, res, body) => {
        if (err) {
            return console.log(err+"Im HereC");
        }
        console.log("got failures");
       store_failures(body);
    });
}
function store_hardware_inventory(value)//callback function
{
    data[0]=value;
    get_storage_systems(store_storage_systems);
}
function store_storage_systems(value)//callback function
{
    data[1]=value;
   get_failures(store_failures);
}
function store_failures(value)//callback function
{
    data[2]=value;
    print();
}
function print()
{
    if(!data)
        console.log("DATA EMPTY");
}
module.exports={
    storeData: function()
    {
        var myPromise = new Promise(function(resolve,rejected){
            get_hardware_inventory(store_hardware_inventory);
            setTimeout(()=> resolve(data),2000);
        });
        myPromise.then((res)=>{
            res=data;
            mongo.toDB(res);
        });
    }
}