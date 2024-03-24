const Member = require('../models/member');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

//editMember, memberDetails, addMember, deleteMember,getEditPage
const editMember=async (req,res)=>{
    console.log(req.body);
    console.log(req.body['_id']);
    const _id = req.body['_id'];
    const {firstName,lastName,residenceCity,street,houseNumber,phoneNumber,MobilePhone,id,IdentityNumber,dateOfBirth}=req.body;
    console.log(firstName);
    Member.findOneAndUpdate(
        { _id: _id },
        {
            $set: {
                firstName: firstName,
                lastName: lastName,
                residenceCity: residenceCity,
                street: street,
                houseNumber: houseNumber,
                phoneNumber: phoneNumber,
                MobilePhone:MobilePhone
            }
        },
        { new: true } // Return the updated member
    )
    .then(updatedMember=> {
        console.log(updatedMember);
        res.status(200).render('details', { member: updatedMember })
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Failed to update member' });
      });
}
const memberDetails = async (req,res)=>{ //to get a specific member
    const _id = req.body['_id'];
    const member = await Member.findById(_id);
    res.render('details', { member: member });
};

const deleteMember= async (req,res)=>{
    console.log('/delete/:id');
    const redirectUrl =  '/';
    const id = req.params.id;
    console.log(id);
    Member.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: redirectUrl });
        })
        .catch(err => {
            console.log(err);
        });
}

const addMember = async (req,res)=>{
    const member=new Member(req.body);
    await member.save()
    .then((result)=>{
        res.render('details', { member: result });
    })
    .catch((err)=>{
        console.error('Error:', err);
    });
}
const getEditPage= async (req,res)=>{
    const _id = req.body['_id'];
    const member = await Member.findById(_id);
    res.render('editDetails', { member: member });
}
const getAddPage= async (req,res)=>{
    res.render('newMember');
}
const getAllMembersPage= async (req,res)=>{
    Member.find()
        .then(result => {
            res.render('allMembers', { members: result });
        })
        .catch(err => {
            console.log(err);
        });
}
module.exports={
    memberDetails, 
    addMember, 
    editMember, 
    deleteMember,
    getEditPage,
    getAddPage,
    getAllMembersPage
}