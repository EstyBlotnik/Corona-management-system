const Member = require('../models/member');
const Vaccine= require('../models/vaccine');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
//editMember, memberDetails, deleteMember, addMember, addRecoveryDate, addPositiveResult, getEditPage, 
//getAddPage, getAllMembersPage, getAddVaccinePage, addVaccine
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
        const vaccines = Vaccine.find({ _id: { $in: updatedMember.vaccines } });
        res.status(200).render('details', { member: updatedMember ,vaccines:vaccines});
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Failed to update member' });
      });
};

const memberDetails = async (req,res)=>{ //to get a specific member
    const _id = req.body['_id'];
    const member = await Member.findById(_id);
    const vaccines = await Vaccine.find({ _id: { $in: member.vaccines } });
    res.render('details', { member: member ,vaccines:vaccines});
};

const deleteMember= async (req,res)=>{
    const id = req.params.id;
    const redirectUrl =  '/';
    console.log(id);
    Member.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: redirectUrl });
        })
        .catch(err => {
            console.log(err);
        });
};

const addMember = async (req,res)=>{
    if (req.file) {
        // Adding the path of the image to the object that will be stored in the base
        const imagePath = '/uploads/'+req.file.filename;
        req.body.imagePath = imagePath;
    }

    // Creating a new record in the Member model with the data received from the form and the image path
    const member = new Member(req.body);
    console.log(member);

    try {
        await member.save();
        const vaccines = Vaccine.find({ _id: { $in: member.vaccines } });
        res.status(200).render('details', { member: member ,vaccines:vaccines});
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error'); // שליחת שגיאה במקרה של כישלון
    }
};

const addRecoveryDate= async (req,res)=>{
    const {recoveryDate,_id} = req.body;
    console.log(recoveryDate,_id);
    Member.findOneAndUpdate(
        { _id: _id },
        {
            $set: {
                recoveryDate: recoveryDate
            }
        },
        { new: true } // Return the updated member
    )
    .then(updatedMember=> {
        console.log(updatedMember);
        const vaccines = Vaccine.find({ _id: { $in: updatedMember.vaccines } });
        res.status(200).render('details', { member: updatedMember ,vaccines:vaccines});
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Failed to update member' });
      });
};

const addPositiveResult = async (req,res)=>{
    const {receivinPositiveResult,_id} = req.body;
    console.log(receivinPositiveResult,_id);
    Member.findOneAndUpdate(
        { _id: _id },
        {
            $set: {
                receivinPositiveResult: receivinPositiveResult
            }
        },
        { new: true } // Return the updated member
    )
    .then(updatedMember=> {
        console.log(updatedMember);
        const vaccines = Vaccine.find({ _id: { $in: updatedMember.vaccines } });
        res.status(200).render('details', { member: updatedMember ,vaccines:vaccines});
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Failed to update member' });
      });
};

const getEditPage= async (req,res)=>{
    const _id = req.body['_id'];
    const member = await Member.findById(_id);
    res.render('editDetails', { member: member });
};

const getAddPage= async (req,res)=>{
    res.render('newMember');
};

const getAllMembersPage= async (req,res)=>{
    Member.find()
        .then(result => {
            res.render('allMembers', { members: result });
        })
        .catch(err => {
            console.log(err);
        });
};

const getAddVaccinePage= async (req,res)=>{
    const _id = req.body['_id'];
    const member = await Member.findById(_id);
    res.render('addVaccine', { member: member });
};

const addVaccine = async (req,res)=>{
    const {date, producer, _id} = req.body;
    console.log(date, producer, _id);
    const vaccine=new Vaccine({date, producer});
    const member = await Member.findById(_id);
    console.log(member);
    await vaccine.save()
    .then((result)=>{
        member.vaccines.push(result);
        return member.save();
    })
    .catch((err)=>{
        console.error('Error:', err);
    });
    const vaccines = await Vaccine.find({ _id: { $in: member.vaccines } });
    res.render('details', { member: member ,vaccines:vaccines});
};

module.exports={
    memberDetails, 
    addMember, 
    editMember, 
    deleteMember,
    getEditPage,
    getAddPage,
    getAllMembersPage,
    getAddVaccinePage,
    addVaccine,
    addPositiveResult,
    addRecoveryDate
}