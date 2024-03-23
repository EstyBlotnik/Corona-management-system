const express = require('express');
const Member =require('../models/member');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.post('/details',async (req,res)=>{
    const _id = req.body['_id'];
    console.log(_id);
    const member = await Member.findOne({_id});
    console.log(member);
    const date=member['dateOfBirth'];
    console.log(date)
    console.log(date.toDateString()) // "Thu Dec 29 2011"

    res.render('details', { member: member });
})
router.post('/add', (req,res)=>{
    console.log(req);
    res.render('newMember');
})
router.post('/add/details', async (req,res)=>{
    console.log(req.body);
    const member=new Member(req.body);
    console.log(member);
    await member.save()
    .then((result)=>{
        res.render('details', { member: result });
    })
    .catch((err)=>{
        console.error('Error:', err);
    });
});
router.delete('/delete/:id', async (req, res) => {
    console.log('/delete/:id');
    // res.json({ redirect: redirectUrl });
    res.render('newMember');

});



module.exports = router;
