const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const NetAppData = require('./server/routes/NetAppDemo');
// API file for interacting with MongoDB
const MongoDBapi = require('./server/routes/Mongo');
const readFromMongo = require('./server/routes/readFromMongo');
const AuthUser = require('./server/routes/AuthUser');
const BugReport = require('./server/routes/BugReport');
const ntlm = require('express-ntlm');
var StillNeedUserInfo = true;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(ntlm());
// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/readFromMongo', readFromMongo);
app.use('/AuthUser', AuthUser);
app.use('/BugReport',BugReport);
// Send all other requests to the Angular app
app.get('/snake',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/assets/snake.html'));
})
app.get('/AuthUser/UserInfo',(req,res)=>{
    res.json(req.ntlm);
})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Running on localhost:${port}`);
    NetAppData.storeData();
});
