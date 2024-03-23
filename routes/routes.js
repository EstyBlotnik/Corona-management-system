const express = require('express');
const Member =require('../models/member');
// const memberController = require('../controllers/memberController');
const router = express.Router();
router.get('/',(req,res)=>{
    res.render('homePage');
});
router.post('/login', (req,res)=>{
    Member.find()
        .then(result => {
            res.render('allMembers', { members: result });
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;