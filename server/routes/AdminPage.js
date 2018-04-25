const express = require('express');//express module
const router = express.Router();//express-router module
const path = require('path');
router.get('/Info', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/adminPage.html'));
}); 
module.exports = router;