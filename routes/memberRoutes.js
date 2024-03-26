const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const memberController=require('../controllers/memberController');
const multer = require('multer');
const path = require('path');

router.use(bodyParser.urlencoded({ extended: true }));
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.join(__dirname, 'public', 'uploads'));
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + '-' + file.originalname);
//     }
//   });

// const upload = multer({ storage: storage });

router.post('/details',memberController.memberDetails);
router.post('/add', memberController.getAddPage)
router.post('/add/details',memberController.addMember);
router.delete('/delete/:id', memberController.deleteMember);
router.post('/edit',memberController.getEditPage);
router.post('/edit/save', memberController.editMember);
router.post('/addVaccine',memberController.getAddVaccinePage);
router.post('/addVaccine/details',memberController.addVaccine);
router.use('/addpositiveResult',memberController.addPositiveResult);
router.use('/addRecoveryDate',memberController.addRecoveryDate);
// router.post('/add/details', upload.single('image'), memberController.addMember);
module.exports = router;
