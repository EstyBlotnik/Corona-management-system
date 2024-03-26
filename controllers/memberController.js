const Member = require('../models/member');
const Vaccine= require('../models/vaccine');
const path = require('path'); 
const multer = require('multer');
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
};

const memberDetails = async (req,res)=>{ //to get a specific member
    const _id = req.body['_id'];
    const member = await Member.findById(_id);
    const vaccines = await Vaccine.find({ _id: { $in: member.vaccines } });
    res.render('details', { member: member ,vaccines:vaccines});
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
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'uploads/') // תיקייה בה התמונות יאוחסנו
    },
    filename: (req, file, cb) => {
    // שמירת הקובץ עם שם ייחודי למניעת קונפליקטים
    //אולי לשמור את שם הקובץ לפי השם של תעודת הזהות של הלקוח או משהו דומה
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });

const addMember = async (req,res)=>{
    const member=new Member(req.body);
    await member.save()
    .then((result)=>{
        const vaccines = Vaccine.find({ _id: { $in: result.vaccines } });
        res.render('details', { member: result ,vaccines:vaccines});
    })
    .catch((err)=>{
        console.error('Error:', err);
    });
};

// const addMember = async (req, res) => {
//     // בדיקה שקובץ תמונה הועלה באמת
//     if (req.file) {
//         // הוספת הנתיב של התמונה לאובייקט שישמר בבסיס הנתונים
//         req.body.imagePath = req.file.path;
//         console.log(req.body.imagePath)
//     }
//     console.log(req.body);
//     // יצירת רשומה חדשה במודל Member עם הנתונים שהתקבלו מהטופס והנתיב של התמונה

//     const member = new Member(req.body);

//     try {
//         await member.save(); // שמירת הרשומה החדשה בבסיס הנתונים
//         const vaccines = Vaccine.find({ _id: { $in: member.vaccines } });
//         res.status(200).render('details', { member: member ,vaccines:vaccines});
//         // res.redirect('/some-success-page'); // הפניה לדף אחר לאחר השמירה בהצלחה
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server Error'); // שליחת שגיאה במקרה של כישלון
//     }
// };

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